import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  CreditCard, 
  Plus, 
  Edit3, 
  Trash2, 
  CheckCircle, 
  Clock, 
  AlertCircle,
  Download,
  Eye,
  Filter,
  Search
} from 'lucide-react';

const PaymentDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedPeriod, setSelectedPeriod] = useState('30days');

  const paymentMethods = [
    {
      id: 1,
      type: 'visa',
      last4: '1234',
      expiryMonth: '12',
      expiryYear: '26',
      isDefault: true,
      cardHolder: 'John Doe'
    },
    {
      id: 2,
      type: 'mastercard',
      last4: '5678',
      expiryMonth: '08',
      expiryYear: '25',
      isDefault: false,
      cardHolder: 'John Doe'
    },
    {
      id: 3,
      type: 'upi',
      upiId: 'john.doe@paytm',
      isDefault: false
    }
  ];

  const transactions = [
    {
      id: 'TXN001',
      date: '2025-01-20',
      amount: 1299,
      status: 'completed',
      method: 'Visa ****1234',
      description: 'Order #ORD12345 - Floral Kurti Set',
      type: 'purchase'
    },
    {
      id: 'TXN002',
      date: '2025-01-18',
      amount: 899,
      status: 'completed',
      method: 'UPI - john.doe@paytm',
      description: 'Order #ORD12344 - Cotton T-Shirt',
      type: 'purchase'
    },
    {
      id: 'TXN003',
      date: '2025-01-15',
      amount: 299,
      status: 'refunded',
      method: 'Visa ****1234',
      description: 'Refund for Order #ORD12343',
      type: 'refund'
    },
    {
      id: 'TXN004',
      date: '2025-01-12',
      amount: 1599,
      status: 'pending',
      method: 'Mastercard ****5678',
      description: 'Order #ORD12342 - Designer Handbag',
      type: 'purchase'
    }
  ];

  const stats = {
    totalSpent: 45670,
    thisMonth: 3297,
    totalTransactions: 156,
    savedAmount: 8934
  };

  const getCardIcon = (type: string) => {
    switch (type) {
      case 'visa':
        return <div className="w-12 h-8 bg-blue-600 rounded flex items-center justify-center text-white font-bold text-sm">VISA</div>;
      case 'mastercard':
        return <div className="w-12 h-8 bg-red-600 rounded flex items-center justify-center text-white font-bold text-sm">MC</div>;
      case 'upi':
        return <div className="w-12 h-8 bg-orange-600 rounded flex items-center justify-center text-white font-bold text-sm">UPI</div>;
      default:
        return <CreditCard className="h-8 w-8 text-gray-400" />;
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      case 'pending':
        return <Clock className="h-5 w-5 text-yellow-500" />;
      case 'refunded':
        return <AlertCircle className="h-5 w-5 text-blue-500" />;
      default:
        return <AlertCircle className="h-5 w-5 text-gray-500" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-800';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'refunded':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'transactions', label: 'Transactions' },
    { id: 'methods', label: 'Payment Methods' },
    { id: 'analytics', label: 'Analytics' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link
            to="/profile"
            className="inline-flex items-center text-purple-600 hover:text-purple-700 transition-colors duration-200"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Profile
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Payment Dashboard</h1>
          <p className="text-gray-600">Manage your payments, transactions, and billing information</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Spent</p>
                <p className="text-2xl font-bold text-gray-900">₹{stats.totalSpent.toLocaleString()}</p>
              </div>
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <CreditCard className="h-6 w-6 text-purple-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">This Month</p>
                <p className="text-2xl font-bold text-gray-900">₹{stats.thisMonth.toLocaleString()}</p>
              </div>
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <CheckCircle className="h-6 w-6 text-green-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Orders</p>
                <p className="text-2xl font-bold text-gray-900">{stats.totalTransactions}</p>
              </div>
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <Clock className="h-6 w-6 text-blue-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Saved Amount</p>
                <p className="text-2xl font-bold text-gray-900">₹{stats.savedAmount.toLocaleString()}</p>
              </div>
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                <AlertCircle className="h-6 w-6 text-orange-600" />
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-6">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors duration-200 ${
                    activeTab === tab.id
                      ? 'border-purple-500 text-purple-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>

          <div className="p-6">
            {activeTab === 'overview' && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* Recent Transactions */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Transactions</h3>
                    <div className="space-y-3">
                      {transactions.slice(0, 3).map((transaction) => (
                        <div key={transaction.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                          <div className="flex items-center space-x-3">
                            {getStatusIcon(transaction.status)}
                            <div>
                              <p className="font-medium text-gray-900">{transaction.description}</p>
                              <p className="text-sm text-gray-600">{transaction.date}</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="font-semibold text-gray-900">
                              {transaction.type === 'refund' ? '+' : '-'}₹{transaction.amount}
                            </p>
                            <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(transaction.status)}`}>
                              {transaction.status}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                    <Link
                      to="#"
                      onClick={() => setActiveTab('transactions')}
                      className="inline-flex items-center mt-4 text-purple-600 hover:text-purple-700 font-medium"
                    >
                      View all transactions
                    </Link>
                  </div>

                  {/* Payment Methods */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Payment Methods</h3>
                    <div className="space-y-3">
                      {paymentMethods.slice(0, 2).map((method) => (
                        <div key={method.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                          <div className="flex items-center space-x-3">
                            {getCardIcon(method.type)}
                            <div>
                              <p className="font-medium text-gray-900">
                                {method.type === 'upi' ? method.upiId : `**** **** **** ${method.last4}`}
                              </p>
                              {method.type !== 'upi' && (
                                <p className="text-sm text-gray-600">Expires {method.expiryMonth}/{method.expiryYear}</p>
                              )}
                            </div>
                          </div>
                          {method.isDefault && (
                            <span className="bg-green-100 text-green-800 text-xs font-semibold px-2 py-1 rounded-full">
                              Default
                            </span>
                          )}
                        </div>
                      ))}
                    </div>
                    <Link
                      to="#"
                      onClick={() => setActiveTab('methods')}
                      className="inline-flex items-center mt-4 text-purple-600 hover:text-purple-700 font-medium"
                    >
                      Manage payment methods
                    </Link>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'transactions' && (
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div className="flex items-center space-x-4">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                      <input
                        type="text"
                        placeholder="Search transactions..."
                        className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                      />
                    </div>
                    <button className="flex items-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                      <Filter className="h-4 w-4 mr-2" />
                      Filter
                    </button>
                  </div>
                  <select
                    value={selectedPeriod}
                    onChange={(e) => setSelectedPeriod(e.target.value)}
                    className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  >
                    <option value="7days">Last 7 days</option>
                    <option value="30days">Last 30 days</option>
                    <option value="90days">Last 90 days</option>
                    <option value="1year">Last year</option>
                  </select>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Transaction
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Date
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Method
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Amount
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Status
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Actions
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {transactions.map((transaction) => (
                          <tr key={transaction.id} className="hover:bg-gray-50">
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="flex items-center">
                                {getStatusIcon(transaction.status)}
                                <div className="ml-3">
                                  <div className="text-sm font-medium text-gray-900">
                                    {transaction.id}
                                  </div>
                                  <div className="text-sm text-gray-500">
                                    {transaction.description}
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                              {transaction.date}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                              {transaction.method}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                              <span className={transaction.type === 'refund' ? 'text-green-600' : 'text-gray-900'}>
                                {transaction.type === 'refund' ? '+' : '-'}₹{transaction.amount}
                              </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(transaction.status)}`}>
                                {transaction.status}
                              </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                              <div className="flex space-x-2">
                                <button className="text-purple-600 hover:text-purple-700">
                                  <Eye className="h-4 w-4" />
                                </button>
                                <button className="text-gray-600 hover:text-gray-700">
                                  <Download className="h-4 w-4" />
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'methods' && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-gray-900">Payment Methods</h3>
                  <button className="flex items-center px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors duration-200">
                    <Plus className="h-4 w-4 mr-2" />
                    Add Payment Method
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {paymentMethods.map((method) => (
                    <div key={method.id} className="bg-white border border-gray-200 rounded-lg p-6">
                      <div className="flex items-center justify-between mb-4">
                        {getCardIcon(method.type)}
                        <div className="flex space-x-2">
                          <button className="p-2 text-gray-600 hover:text-gray-700 hover:bg-gray-100 rounded">
                            <Edit3 className="h-4 w-4" />
                          </button>
                          <button className="p-2 text-red-600 hover:text-red-700 hover:bg-red-50 rounded">
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <p className="font-medium text-gray-900">
                          {method.type === 'upi' ? method.upiId : `**** **** **** ${method.last4}`}
                        </p>
                        {method.type !== 'upi' && (
                          <>
                            <p className="text-sm text-gray-600">
                              Expires {method.expiryMonth}/{method.expiryYear}
                            </p>
                            <p className="text-sm text-gray-600">
                              {method.cardHolder}
                            </p>
                          </>
                        )}
                        {method.isDefault && (
                          <span className="inline-flex bg-green-100 text-green-800 text-xs font-semibold px-2 py-1 rounded-full">
                            Default Payment Method
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'analytics' && (
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-gray-900">Spending Analytics</h3>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className="bg-gray-50 rounded-lg p-6">
                    <h4 className="font-medium text-gray-900 mb-4">Monthly Spending Trend</h4>
                    <div className="h-64 flex items-center justify-center text-gray-500">
                      Chart placeholder - Monthly spending visualization
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 rounded-lg p-6">
                    <h4 className="font-medium text-gray-900 mb-4">Category Breakdown</h4>
                    <div className="h-64 flex items-center justify-center text-gray-500">
                      Chart placeholder - Category spending breakdown
                    </div>
                  </div>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h4 className="font-medium text-gray-900 mb-4">Spending Summary</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="text-center">
                      <p className="text-2xl font-bold text-purple-600">₹12,450</p>
                      <p className="text-sm text-gray-600">Average Monthly</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-green-600">₹8,934</p>
                      <p className="text-sm text-gray-600">Total Savings</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-blue-600">156</p>
                      <p className="text-sm text-gray-600">Total Orders</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentDashboard;