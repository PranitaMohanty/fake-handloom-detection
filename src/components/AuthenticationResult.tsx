import React from 'react';
import { CheckCircle, XCircle, Info } from 'lucide-react';

interface AuthenticationResultProps {
  result: 'authentic' | 'fake';
}

const AuthenticationResult: React.FC<AuthenticationResultProps> = ({ result }) => {
  return (
    <div className={`mt-6 p-4 rounded-lg ${result === 'authentic' ? 'bg-green-100' : 'bg-red-100'}`}>
      <div className="flex items-center mb-2">
        {result === 'authentic' ? (
          <CheckCircle className="w-6 h-6 text-green-500 mr-2" />
        ) : (
          <XCircle className="w-6 h-6 text-red-500 mr-2" />
        )}
        <h3 className="text-lg font-semibold">
          {result === 'authentic' ? 'Authentic Handloom Product' : 'Potential Counterfeit Product'}
        </h3>
      </div>
      <p className="text-sm mb-4">
        {result === 'authentic'
          ? 'This product has been verified as an authentic Telangana handloom item.'
          : 'Our system has detected that this product may not be an authentic Telangana handloom item.'}
      </p>
      <div className="bg-white p-4 rounded-md">
        <div className="flex items-center mb-2">
          <Info className="w-5 h-5 text-blue-500 mr-2" />
          <h4 className="font-semibold">Product Information</h4>
        </div>
        <ul className="list-disc list-inside text-sm">
          {result === 'authentic' ? (
            <>
              <li>Origin: Telangana, India</li>
              <li>Weaving Technique: Traditional handloom</li>
              <li>Material: 100% cotton</li>
              <li>Artisan Community: Verified local weavers</li>
            </>
          ) : (
            <>
              <li>Unable to verify origin</li>
              <li>Weaving technique does not match traditional patterns</li>
              <li>Material composition uncertain</li>
              <li>Not associated with verified local artisans</li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default AuthenticationResult;