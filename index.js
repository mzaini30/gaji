app = new Vue({
 el: ".vue",
 data: {
  duit: [{
   barang: "",
   jual: "",
   modal: "",
   gaji: ""
  }],
  persen: "",
  total: ""
 },
 methods: {
  tambah(){
   this.duit.push({
    barang: "",
    jual: "",
    modal: "",
    gaji: ""
   })
  },
  hapus(n){
   this.duit.splice(n, 1)
  },
  hitung_gaji(){
   for (x of this.duit){
    x.gaji = this.persen / 100 * (x.jual - x.modal)
   }
  },
  cari_total(){
   tambah = 0
   for (x of this.duit){
    tambah += Number(x.gaji)
   }
   this.total = tambah.toLocaleString("id")
  }
 },
 watch: {
  persen(){
   this.hitung_gaji()
   this.cari_total()
  },
  duit: {
   deep: true,
   handler(){
    this.hitung_gaji()
    this.cari_total()
   }
  }
 }
})