'use client';

import { Button } from "@/components/ui/button";
import { FcGoogle } from "react-icons/fc";

const SignIn: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-xl shadow-lg">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-bold text-gray-900">Welcome back</h2>
          <p className="mt-2 text-sm text-gray-600">
            Sign in to access your account
          </p>
        </div>

        <div className="mt-8 space-y-6">
          <Button 
            className="w-full flex items-center justify-center gap-3 py-6"
            variant="outline"
            onClick={() => {}}
          >
            <FcGoogle className="w-5 h-5" />
            Sign in with Google
          </Button>

          <div className="text-center text-sm text-gray-600">
            By signing in, you agree to our{' '}
            <a href="#" className="font-medium text-primary hover:text-primary/80">
              Terms of Service
            </a>{' '}
            and{' '}
            <a href="#" className="font-medium text-primary hover:text-primary/80">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;