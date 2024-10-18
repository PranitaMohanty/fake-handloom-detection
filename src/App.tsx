import React, { useState } from 'react';
import { Camera, Upload, CheckCircle, XCircle, Info } from 'lucide-react';
import Header from './components/Header';
import Footer from './components/Footer';
import AuthenticationResult from './components/AuthenticationResult';

function App() {
  const [file, setFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [authenticationResult, setAuthenticationResult] = useState<'authentic' | 'fake' | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
      setPreviewUrl(URL.createObjectURL(selectedFile));
      setAuthenticationResult(null);
    }
  };

  const handleAuthenticate = () => {
    // Simulating AI authentication process
    setTimeout(() => {
      setAuthenticationResult(Math.random() > 0.5 ? 'authentic' : 'fake');
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold mb-4">Handloom Product Authentication</h2>
          <div className="mb-4">
            <label htmlFor="product-image" className="block text-sm font-medium text-gray-700 mb-2">
              Upload Product Image
            </label>
            <div className="flex items-center justify-center w-full">
              <label
                htmlFor="product-image"
                className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100"
              >
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  {previewUrl ? (
                    <img src={previewUrl} alt="Preview" className="max-h-full max-w-full object-contain" />
                  ) : (
                    <>
                      <Upload className="w-10 h-10 mb-3 text-gray-400" />
                      <p className="mb-2 text-sm text-gray-500">
                        <span className="font-semibold">Click to upload</span> or drag and drop
                      </p>
                      <p className="text-xs text-gray-500">PNG, JPG or GIF (MAX. 800x400px)</p>
                    </>
                  )}
                </div>
                <input id="product-image" type="file" className="hidden" onChange={handleFileChange} accept="image/*" />
              </label>
            </div>
          </div>
          <button
            onClick={handleAuthenticate}
            disabled={!file}
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300 disabled:bg-gray-300 disabled:cursor-not-allowed"
          >
            Authenticate Product
          </button>
        </div>
        {authenticationResult && (
          <AuthenticationResult result={authenticationResult} />
        )}
      </main>
      <Footer />
    </div>
  );
}

export default App;