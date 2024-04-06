import librosa
import numpy as np

def extract_mfcc(file_path, n_mfcc=13, hop_length=512, n_fft=2048):
    """
    Extract MFCC features from an audio file.

    Parameters:
    - file_path (str): Path to the audio file.
    - n_mfcc (int): Number of MFCC coefficients to extract (default: 13).
    - hop_length (int): Hop length for the STFT (default: 512).
    - n_fft (int): Number of FFT points for STFT (default: 2048).

    Returns:
    - mfcc_features (ndarray): Extracted MFCC features.
    """
    audio, sr = librosa.load(file_path, sr=None)
    mfccs = librosa.feature.mfcc(y=audio, sr=sr, n_mfcc=n_mfcc, hop_length=hop_length, n_fft=n_fft)
    return np.mean(mfccs, axis=1)  # Use the mean of MFCCs as features
