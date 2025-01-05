/* eslint-disable react/prop-types */
import {
  HashRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { FloatingShape,LoadingSpinner } from "./components";
import { DashboardPage, LoginPage, SignupPage, EmailVerificationPage,ForgetPasswordPage,ResetPasswordPage } from "./pages";
import { ToastContainer } from "react-toastify";
import { useAuthStore } from "./store/authStore";
import { useEffect } from "react";


// protect route that require authentication
const ProtectedRoute = ({ children }) => {
	const { isAuthenticated, user } = useAuthStore();

	if (!isAuthenticated) {
		return <Navigate to='/login' replace />;
	}

	if (!user.isVerified) {
		return <Navigate to='/verify-email' replace />;
	}

	return children;
};

// redirect authenticated users to the home page 
// make the routes protected from users to navigate to other routes
const RedirectAuthenticatedUser = ({ children }) => {
  const { isAuthenticated, user } = useAuthStore();
  if (isAuthenticated && user.isVerified) {
    return <Navigate to={"/"} replace />;
  }
  return children;
};
export default function App() {
  const { isCheckingAuth, checkAuth } = useAuthStore();
  useEffect(() => {
    checkAuth();
  }, [checkAuth]);
  if (isCheckingAuth) {
    return <LoadingSpinner/>
  } 
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-green-900 to-emerald-900 flex items-center justify-center relative overflow-hidden">
        <FloatingShape color="bg-green-500" size="w-64 h-64" top="-5%"  left="10%" delay={0}/>
        <FloatingShape color="bg-emerald-500" size="w-48 h-48" top="70%"  left="80%" delay={5}/>
        <FloatingShape color="bg-lime-500" size="w-32 h-32" top="40%" left="-10%" delay={2}/>
        <Routes>
          <Route 
          path="/" 
          element={
          <ProtectedRoute>
            <DashboardPage />
          </ProtectedRoute>
          } 
          />
          <Route 
          path="/login"
          element={
            <RedirectAuthenticatedUser>
              <LoginPage />
            </RedirectAuthenticatedUser>
          }
          />
          <Route
            path="/signup"
            element={
              <RedirectAuthenticatedUser>
                <SignupPage />
              </RedirectAuthenticatedUser>
            }
          />
          <Route 
          path="/verify-email" 
          element={
            <>
              <EmailVerificationPage />
            </>
            } 
          />
          <Route
          path="/forget-password"
          element={
            <RedirectAuthenticatedUser>
              <ForgetPasswordPage />
            </RedirectAuthenticatedUser>
          }
          />
          <Route
          path="/reset-password/:token"
          element={
            <RedirectAuthenticatedUser>
              <ResetPasswordPage />
            </RedirectAuthenticatedUser>
          }
          />
          <Route path="*" element={<Navigate to="/" replace/>}/>
        </Routes>
        <ToastContainer />
      </div>
    </Router>
  );
}
