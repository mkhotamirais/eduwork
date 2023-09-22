const { AbilityBuilder, Ability } = require("@casl/ability");
// const { AbilityBuilder, createMongoAbility } = require("@casl/ability");

function getToken(req) {
  let token = req.headers.authorization
    ? req.headers.authorization.replace("Bearer ", "")
    : null;
  return token && token.length ? token : null;
}

// policy
const policies = {
  guest(user, { can }) {
    can("read", "Product");
  },
  user(user, { can }) {
    can("view", "Order");
    can("create", "Product");
    can("create", "Order");
    can("read", "Order", { user_id: user._id });
    can("update", "User", { _id: user._id });
    can("read", "Cart", { user_id: user._id });
    can("update", "Cart", { _id: user._id });
    can("view", "DeliveryAddress");
    can("create", "DeliveryAddress", { user_id: user._id });
    can("update", "DeliveryAddress", { user_id: user._id });
    can("delete", "DeliveryAddress", { user_id: user._id });
    can("read", "Invoice", { user_id: user._id });
  },
  admin(user, { can }) {
    can("manage", "all");
  },
};

const policyfor = (user) => {
  let builder = new AbilityBuilder();
  if (user && typeof policies[user.role] === "function") {
    policies[user.role](user, builder);
  } else {
    policies["guest"](user, builder);
  }
  return new Ability(builder.rules);
};
// const policyfor = (user) => {
//   const { can, cannot, build } = new AbilityBuilder(createMongoAbility);
//   if (user == "admin") {
//     can("manage", "all");
//   } else if (user == "guest") {
//     can("read", "Products");
//   } else if (user == "user") {
//     can("view", "Order");
//     can("create", "Product");
//     can("create", "Order");
//     can("read", "Order", { user_id: user._id });
//     can("update", "User", { _id: user._id });
//     can("read", "Cart", { user_id: user._id });
//     can("update", "Cart", { _id: user._id });
//     can("view", "DeliveryAddress");
//     can("create", "DeliveryAddress", { user_id: user._id });
//     can("update", "DeliveryAddress", { user_id: user._id });
//     can("delete", "DeliveryAddress", { user_id: user._id });
//     can("read", "Invoice", { user_id: user._id });
//   }
//   return build();
// };

module.exports = { getToken, policyfor };
