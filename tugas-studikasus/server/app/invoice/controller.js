const { subject } = require("@casl/ability");
const Invoice = require("../invoice/model.js");
const { policyFor } = require("../utils.js");

const show = async (req, res, next) => {
  try {
    let { order_id } = req.params;
    let invoice = await Invoice.findOne({ order: order_id })
      .populate("order")
      .populate("user");
    let policy = policyFor(req.user);
    let subjectInvoice = subject("Invoice", {
      ...invoice,
      user_id: invoice.user._id,
    });
    if (!policy.can("read", subjectInvoice)) {
      return res.json({
        error: 1,
        message: `Anda tidak memiliki akses untuk invoice ini`,
      });
    }
    if (!policy.can("read", "Invoice")) {
      return res.json({
        error: 1,
        message: `Anda tidak memiliki akses untuk invoice ini`,
      });
    }
    return res.json(invoice);
  } catch (err) {
    return res.json({
      error: 1,
      message: `Error when getting invoice.`,
    });
  }
};

module.exports = { show };
