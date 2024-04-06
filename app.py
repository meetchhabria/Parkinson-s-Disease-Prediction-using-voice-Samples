import os
import numpy as np
from flask import Flask, request, jsonify
from flask_cors import CORS
from werkzeug.utils import secure_filename
import joblib
import librosa

app = Flask(__name__)
CORS(app)


UPLOAD_FOLDER = '/uploads'  # Update this with the path to your upload folder
ALLOWED_EXTENSIONS = {'ogg', 'wav', 'mp3'}  # Update allowed file extensions

app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

# Load the trained decision tree model using joblib
print("Loading model...")
model_path = r'C:\Users\chhab\OneDrive\Desktop\voice-pd\decision_tree_model (1).pkl'
if os.path.exists(model_path):
    with open(model_path, 'rb') as f:
        model = joblib.load(f)
    print("Model loaded successfully.")
else:
    print(f"Model file '{model_path}' not found.")


# Function to check if the file extension is allowed
def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

# Function to extract MFCC features from audio file
def extract_mfcc(file_path, n_mfcc=13, hop_length=512, n_fft=2048):
    try:
        audio, sr = librosa.load(file_path, sr=None)
        mfccs = librosa.feature.mfcc(y=audio, sr=sr, n_mfcc=n_mfcc, hop_length=hop_length, n_fft=n_fft)
        mfcc_mean = np.mean(mfccs, axis=1)  # Use the mean of MFCCs as features
        print("MFCC Mean:", mfcc_mean)  # Print the mean of MFCC features for debugging
        return mfcc_mean
    
    except Exception as e:
        print(f"Error extracting MFCC features from {file_path}: {str(e)}")
        return None

# Function to make prediction using the loaded model
def make_prediction(model, mfcc_features):
    try:
        if hasattr(model, 'predict'):  # Check if the model object has the predict method
            prediction = model.predict(mfcc_features.reshape(1, -1))  # Reshape for prediction
            
            # Map prediction to human-readable result
            result_mapping = {0: 'Negative - The person doesn\'t have Parkinson\'s disease',
                              1: 'Positive - The person has Parkinson\'s disease'}
            
            # Get the corresponding result message
            analysis_result = result_mapping.get(prediction[0], 'Unknown')
            
            # Print prediction before the result
            print("Prediction:", prediction)
            print("Predictions made successfully.")
            
            return jsonify({'result': analysis_result})
        else:
            error_message = 'Loaded model does not have a predict method'
            print(error_message)
            return jsonify({'error': error_message})
    except Exception as e:
        error_message = f'Error making prediction: {str(e)}'
        print(error_message)  # Print the error for debugging purposes
        return jsonify({'error': error_message})




@app.route('/api/upload', methods=['POST'])
def upload_file():
    if 'file' not in request.files:
        return jsonify({'error': 'No file part'})

    file = request.files['file']
    if file.filename == '':
        return jsonify({'error': 'No selected file'})

    if file and allowed_file(file.filename):
        filename = secure_filename(file.filename)
        if not os.path.exists(app.config['UPLOAD_FOLDER']):
            os.makedirs(app.config['UPLOAD_FOLDER'])  # Create the directory if it doesn't exist
        file_path = os.path.join(app.config['UPLOAD_FOLDER'], filename)
        file.save(file_path)
        
        # Extract MFCC features
        try:
            mfcc_features = extract_mfcc(file_path)
        except Exception as e:
            return jsonify({'error': f'Error extracting MFCC features: {str(e)}'})

        # Make predictions using the loaded model
        print("Making predictions...")
        prediction_result = make_prediction(model, mfcc_features)
        return prediction_result

    return jsonify({'error': 'Invalid file format'})


if __name__ == '__main__':
    app.run(debug=True)
