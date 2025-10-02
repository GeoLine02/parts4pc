import { Model, DataTypes, Optional } from "sequelize";
import sequelize from "@/lib/sequelize";

export interface PreBuildsAttributes {
  id: number;

  // Product info
  product_name: string;
  price: number;
  ownerId: number;

  // CPU
  cpu: string | null;
  cpu_socket: string | null;
  cpu_cores: number | null;
  cpu_threads: number | null;

  // Motherboard
  motherboard_model: string | null;
  motherboard_socket: string | null;
  motherboard_dimmslot_count: number | null;
  max_ram_frequency: number | null;

  // Storage
  ssd_model: string | null;
  ssd_capacity_gb: number | null;
  ssd_type: string | null;
  hdd_model: string | null;
  hdd_capacity_gb: number | null;

  // GPU
  gpu_name: string | null;
  gpu_vram_gb: number | null;

  // RAM
  ram_model: string | null;
  ram_capacity_gb: number | null;
  ram_frequency_mhz: number | null;
  ram_type: string | null;

  // Case
  case_model: string | null;
  case_fans_count: number | null;

  // Cooling
  cpu_cooler_model: string | null;
  cpu_cooler_type: string | null;

  // PSU
  psu_model: string | null;
  psu_wattage: number | null;
  psu_modularity: string | null;

  // Timestamps
  createdAt?: Date;
  updatedAt?: Date;
}

// Optional fields for creation (id, timestamps will be auto-generated)
export type PreBuildsCreationAttributes = Optional<
  PreBuildsAttributes,
  "id" | "createdAt" | "updatedAt"
>;

export class PreBuilds
  extends Model<PreBuildsAttributes, PreBuildsCreationAttributes>
  implements PreBuildsAttributes
{
  public id!: number;

  public product_name!: string;
  public price!: number;
  public ownerId!: number;

  public cpu!: string | null;
  public cpu_socket!: string | null;
  public cpu_cores!: number | null;
  public cpu_threads!: number | null;

  public motherboard_model!: string | null;
  public motherboard_socket!: string | null;
  public motherboard_dimmslot_count!: number | null;
  public max_ram_frequency!: number | null;

  public ssd_model!: string | null;
  public ssd_capacity_gb!: number | null;
  public ssd_type!: string | null;
  public hdd_model!: string | null;
  public hdd_capacity_gb!: number | null;

  public gpu_name!: string | null;
  public gpu_vram_gb!: number | null;

  public ram_model!: string | null;
  public ram_capacity_gb!: number | null;
  public ram_frequency_mhz!: number | null;
  public ram_type!: string | null;

  public case_model!: string | null;
  public case_fans_count!: number | null;

  public cpu_cooler_model!: string | null;
  public cpu_cooler_type!: string | null;

  public psu_model!: string | null;
  public psu_wattage!: number | null;
  public psu_modularity!: string | null;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

PreBuilds.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },

    product_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    ownerId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    cpu: DataTypes.STRING,
    cpu_socket: DataTypes.STRING,
    cpu_cores: DataTypes.INTEGER,
    cpu_threads: DataTypes.INTEGER,

    motherboard_model: DataTypes.STRING,
    motherboard_socket: DataTypes.STRING,
    motherboard_dimmslot_count: DataTypes.INTEGER,
    max_ram_frequency: DataTypes.INTEGER,

    ssd_model: DataTypes.STRING,
    ssd_capacity_gb: DataTypes.INTEGER,
    ssd_type: DataTypes.STRING,
    hdd_model: DataTypes.STRING,
    hdd_capacity_gb: DataTypes.INTEGER,

    gpu_name: DataTypes.STRING,
    gpu_vram_gb: DataTypes.INTEGER,

    ram_model: DataTypes.STRING,
    ram_capacity_gb: DataTypes.INTEGER,
    ram_frequency_mhz: DataTypes.INTEGER,
    ram_type: DataTypes.STRING,

    case_model: DataTypes.STRING,
    case_fans_count: DataTypes.INTEGER,

    cpu_cooler_model: DataTypes.STRING,
    cpu_cooler_type: DataTypes.STRING,

    psu_model: DataTypes.STRING,
    psu_wattage: DataTypes.INTEGER,
    psu_modularity: DataTypes.STRING,
  },
  {
    sequelize,
    tableName: "PreBuilds",
    modelName: "PreBuilds",
  }
);

export default PreBuilds;
