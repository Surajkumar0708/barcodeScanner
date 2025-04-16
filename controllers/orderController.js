import Order from "../models/Order.js";

export const addOrder = async (req, res) => {
  try {
    const order = {
      userId: req?.user?.id,
      items: req?.body?.items,
      total: req?.body?.total,
    };
    return res.sendStatus(200).json({ message: "Order saved", order });
  } catch (e) {}
};

export const getOrders = async (req, res) => {
  try {
    const order = await Order.find({ userId: req.user.id }).sort({
      createdAt: -1,
    });
    return res.json(order);
  } catch (e) {}
};
