import { CanBo } from './CanBo';
import { KySu } from './KySu';
import { NhanVien } from './NhanVien';
import { QLCB } from './QLCB';

const qlcb = new QLCB();

const canBo = new CanBo("Nguyễn Trần Khánh Vi", 20, "Female", "Hanoi");
const kySu = new KySu("Thái Hoàng Quân", 20, "Male", "HCMC", "Construction");
const nhanVien = new NhanVien("Đỗ Văn Vũ", 25, "Male", "Da Nang", "Administration");

qlcb.addStaff(canBo);
qlcb.addStaff(kySu);
qlcb.addStaff(nhanVien);

qlcb.displayAllStaff();

console.log("Search result:", qlcb.searchByName("Đỗ Văn Vũ"));

qlcb.deleteByName("Đỗ Văn Vũ");
qlcb.displayAllStaff();

qlcb.exitProgram();