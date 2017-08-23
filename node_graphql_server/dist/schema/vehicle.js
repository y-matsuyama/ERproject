"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = `

type Vehicle implements Node {
  name: String
  model: String
  vehicleClass: String
  manufacturers: [String]
  costInCredits: Int
  length: Float
  crew: String
  passengers: String
  maxAtmospheringSpeed: Int
  cargoCapacity: Int
  consumables: String
  pilots: [Person]
  films: [Film]
  created: String
  edited: String
  id: ID!
}
`;
//# sourceMappingURL=vehicle.js.map