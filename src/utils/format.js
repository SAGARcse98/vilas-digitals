/** Formats a number as Indian Rupees, e.g. 18500 -> "₹18,500" */
export const formatINR = (amount) => `₹${amount.toLocaleString('en-IN')}`;

