// pages/api/products/[id].js

import productsData from './data';

export default function handler(req, res) {
  const { id } = req.query;
  const product = productsData.find((p) => p.id === id);

  if (!product) {
    return res.status(404).json({ error: 'Product not found' });
  }

  res.status(200).json(product);
}
