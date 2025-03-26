//Menampilkan Kalkulator
function showCalculator(type, button){
    document.querySelectorAll(".nav-button button").forEach(btn => {
        btn.classList.remove("active");
    });

    button.classList.add("active");
    document.getElementById('persegi').classList.add('hidden')
    document.getElementById('persegiPanjang').classList.add('hidden')
    document.getElementById(type).classList.remove('hidden')
}

//Hitung Luas Persegi
function luasPersegi() {
    let sisi = document.getElementById('sisi').value

    if (sisi == "" || isNaN(sisi) || sisi<=0) {
        alert('Masukkan angka yang valid')
        return
    }

    let luas = sisi * sisi
    document.getElementById('hasilLuasPersegi').innerHTML = `L = S x S <br> L = ${sisi} x ${sisi} <br> L = ${luas}`
}

//Reset Luas Persegi
function resetLuasPersegi(){
    document.getElementById('sisi').value = ""
    document.getElementById('hasilLuasPersegi').innerHTML = ""
}

//Hitung Keliling Persegi
function kelilingPersegi(){
    let sisi = document.getElementById('sisiKelP').value

    if (sisi == "" || isNaN(sisi) || sisi<=0) {
        alert('Masukkan angka yang valid')
        return
    }

    let keliling = 4 * sisi
    document.getElementById('hasilKelilingPersegi').innerHTML = `K = 4 x S <br> K = 4 x ${sisi} <br> K = ${keliling}`
}

//Reset Keliling Persegi
function resetKelilingPersegi(){
    document.getElementById('sisiKelP').value = ""
    document.getElementById('hasilKelilingPersegi').innerHTML = ""
}

// Hitung Luas Persegi Panjang
function luasPersegiPanjang(){
    let panjang = document.getElementById('panjang').value
    let lebar = document.getElementById('lebar').value

    if(isNaN(panjang) || isNaN(lebar) || panjang <= 0 || lebar <= 0){
        alert('Masukkan angka yang valid')
        return
    }

    let luasPersegiPanjang = panjang * lebar
    document.getElementById('luasPersegiPanjang').innerHTML = `L = p x l <br> L = ${panjang} x ${lebar} <br> L = ${luasPersegiPanjang}`
}

//Reset Luas Persegi Panjang
function resetLuasPersegiPanjang(){
    document.getElementById('panjang').value = ""
    document.getElementById('lebar').value = ""
    document.getElementById('luasPersegiPanjang').innerHTML = ""
}

// Hitung keliling Persegi Panjang
function kelilingPersegiPanjang(){
    let panjang = parseInt(document.getElementById('panjangKel').value)
    let lebar = parseInt(document.getElementById('lebarKel').value)

    if(isNaN(panjang) || isNaN(lebar) || panjang <= 0 || lebar <= 0){
        alert('Masukkan angka yang valid')
        return
    }

    let kelilingPersegiPanjang = 2 * ((panjang + lebar))
    document.getElementById('kelilingPersegiPanjang').innerHTML = `K = 2 x (p + l) <br> K = 2 x (${panjang} + ${lebar}) <br> K = ${kelilingPersegiPanjang}`

}

//reset Keliling Persegi Panjang
function resetKelilingPersegiPanjang(){
    document.getElementById('panjangKel').value = ""
    document.getElementById('lebarKel').value = ""
    document.getElementById('kelilingPersegiPanjang').innerHTML = ""
}



