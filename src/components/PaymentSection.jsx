import { useState } from 'react';
import { CreditCard, ExternalLink, CheckCircle, XCircle, Loader2 } from 'lucide-react';

export default function PaymentSection() {
  const [paymentStatus, setPaymentStatus] = useState(() => {
    return localStorage.getItem('paymentStatus') || null;
  }); // 'pending', 'completed', 'failed'
  const [loading, setLoading] = useState(false);

  // Razorpay payment link
  const RAZORPAY_PAYMENT_LINK = "https://razorpay.me/@ashishkumarrathour";

  // Course/Enrollment fee
  const ENROLLMENT_FEE = 1; // ₹1

  const handlePayment = () => {
    setLoading(true);

    // Open Razorpay payment link in new tab
    window.open(RAZORPAY_PAYMENT_LINK, '_blank');

    // Set status to pending
    setPaymentStatus('pending');
    setLoading(false);
  };

  const markAsCompleted = () => {
    setPaymentStatus('completed');
    // You can also save this to backend/localStorage
    localStorage.setItem('paymentStatus', 'completed');
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h2 className="text-2xl font-bold text-slate-900 mb-2">Complete Your Enrollment</h2>
        <p className="text-slate-600">
          Secure your spot in the Winter 2026 Internship Program by completing the enrollment payment.
        </p>
      </div>

      {/* Payment Card */}
      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100 shadow-sm">
        <div className="flex items-start justify-between mb-6">
          <div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Enrollment Fee</h3>
            <div className="flex items-baseline gap-2">
              <span className="text-4xl font-bold text-blue-800">₹{ENROLLMENT_FEE}</span>
              <span className="text-slate-500 line-through">₹999</span>
              <span className="bg-green-100 text-green-800 text-xs font-bold px-2 py-1 rounded">99% OFF</span>
            </div>
          </div>
          <div className="bg-blue-800 p-3 rounded-full">
            <CreditCard className="w-6 h-6 text-white" />
          </div>
        </div>

        {/* What's Included */}
        <div className="bg-white rounded-xl p-4 mb-6">
          <h4 className="font-semibold text-slate-900 mb-3">What's Included:</h4>
          <ul className="space-y-2 text-sm text-slate-600">
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
              <span>12 Weeks Intensive Training Program</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
              <span>Industry-Ready Project Portfolio</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
              <span>Verified Completion Certificate</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
              <span>Lifetime Access to Course Materials</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
              <span>1-on-1 Mentor Support</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
              <span>Placement Assistance</span>
            </li>
          </ul>
        </div>

        {/* Payment Status */}
        {paymentStatus === 'pending' && (
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-4">
            <div className="flex items-start gap-3">
              <Loader2 className="w-5 h-5 text-yellow-600 animate-spin flex-shrink-0 mt-0.5" />
              <div className="flex-1">
                <h5 className="font-semibold text-yellow-900 mb-1">Payment Pending</h5>
                <p className="text-sm text-yellow-700 mb-3">
                  Complete the payment in the opened tab. Once done, click "I've Completed Payment" below.
                </p>
                <button
                  onClick={markAsCompleted}
                  className="text-sm font-semibold text-yellow-800 hover:text-yellow-900 underline"
                >
                  I've Completed Payment
                </button>
              </div>
            </div>
          </div>
        )}

        {paymentStatus === 'completed' && (
          <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-4">
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <div>
                <h5 className="font-semibold text-green-900 mb-1">Payment Confirmed!</h5>
                <p className="text-sm text-green-700">
                  Your enrollment is now active. You can access all course materials and start learning!
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Payment Button */}
        {paymentStatus !== 'completed' && (
          <button
            onClick={handlePayment}
            disabled={loading}
            className="w-full bg-blue-800 hover:bg-blue-900 text-white font-bold py-4 px-6 rounded-xl transition-all duration-200 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                <span>Processing...</span>
              </>
            ) : (
              <>
                <CreditCard className="w-5 h-5" />
                <span>Pay ₹{ENROLLMENT_FEE} Now</span>
                <ExternalLink className="w-4 h-4" />
              </>
            )}
          </button>
        )}

        {/* Security Note */}
        <p className="text-xs text-slate-500 text-center mt-4">
          🔒 Secure payment powered by Razorpay. Your payment information is encrypted and secure.
        </p>
      </div>

      {/* Payment Instructions */}
      <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
        <h4 className="font-semibold text-slate-900 mb-3">Payment Instructions:</h4>
        <ol className="space-y-2 text-sm text-slate-600 list-decimal list-inside">
          <li>Click the "Pay Now" button above</li>
          <li>You'll be redirected to Razorpay's secure payment page</li>
          <li>Complete the payment using UPI, Card, or Net Banking</li>
          <li>Return to this page and click "I've Completed Payment"</li>
          <li>Your enrollment will be activated within 5 minutes</li>
        </ol>
      </div>

      {/* Support */}
      <div className="bg-blue-50 rounded-xl p-4 border border-blue-100">
        <p className="text-sm text-slate-700">
          <strong>Need help?</strong> Contact us at{' '}
          <a href="mailto:support@internmaker.com" className="text-blue-800 hover:underline font-semibold">
            support@internmaker.com
          </a>
          {' '}or WhatsApp at{' '}
          <a href="https://wa.me/1234567890" className="text-blue-800 hover:underline font-semibold">
            +91 12345 67890
          </a>
        </p>
      </div>
    </div>
  );
}