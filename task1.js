            function kerja(tipe, jam) {
                const mulai = tipe === "A" ? 6 : 18;
                let total = jam + Math.floor(jam / 4) + 1;
                const num = ((total - 1) % 4) === 0 ? total + 1 : total;

                for (let n = 1; n < num; n++) {
                    const waktu = mulai + (n - 1);
                    const istirahat = (n % 4) === 0;
                    document.querySelector("#tampil-hasil").insertAdjacentHTML('beforeend',waktu % 24+":00".concat(istirahat ? " Istirahat<br>" : " Bekerja<br>"));
                }
            }

            function reset(){
                 document.getElementById("tampil-hasil").innerHTML ="";
                 document.getElementById("input-tipe").value= "";
                 document.getElementById("input-jam").value= "";
            }
            function klik(){
                let a = document.getElementById("input-tipe").value;
                let b = parseInt(document.getElementById("input-jam").value);
                kerja(a,b);
            }
            
            document.getElementById("tombol-tampil").onclick = klik;
            
            document.getElementById("tombol-reset").onclick = reset;