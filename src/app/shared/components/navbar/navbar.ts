export interface Navbar {
  id: number;
  title: string;
  route?: string;
  hasDropdown: boolean;
  dropdownList?: Array<{ title: string; route: string }>;
}
