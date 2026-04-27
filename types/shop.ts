export type RoomId = "living" | "bedroom" | "bathroom" | "kitchen" | "workspace";

export type CategoryId =
  | "sofas"
  | "storage"
  | "tables"
  | "beds"
  | "wardrobes"
  | "dining"
  | "bath-tubs"
  | "mirrors"
  | "desks"
  | "chairs"
  | "bookcases";

export type Room = {
  id: RoomId;
  name: string;
  image: string;
  slug?: string;
};

export type Category = {
  id: CategoryId;
  roomId: RoomId;
  name: string;
  description: string;
  slug?: string;
};

export type Product = {
  id: string;
  roomId: RoomId;
  categoryId: CategoryId;
  name: string;
  description: string;
  price: number;
  image: string;
  position: [number, number, number];
  dimensions: [number, number, number];
  color: string;
  kind: "sofa" | "table" | "bed" | "bath" | "desk" | "storage" | "chair" | "mirror";
  placementKey?: string;
};
