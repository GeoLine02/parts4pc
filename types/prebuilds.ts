export interface PreBuildType {
  id: number;
  product_name: string;
  price: number;

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
}
