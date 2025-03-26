//Menampilkan Kalkulator
function showCalculator(type, button){
    document.querySelectorAll(".nav-button button").forEach(btn => {
        btn.classList.remove("active");
    });

    button.classList.add("active");
    document.getElementById('persegi').classList.add('hidden')
    document.getElementById('persegipanjang').classList.add('hidden')
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
    document.getElementById('hasilluaspersegi').innerHTML = `L = S x S <br> L = ${sisi} x ${sisi} <br> L = ${luas}`
}

//Reset Luas Persegi
function resetLuasPersegi(){
    document.getElementById('sisi').value = ""
    document.getElementById('hasilluaspersegi').innerHTML = ""
}

//Hitung Keliling Persegi
function kelilingPersegi(){
    let sisi = document.getElementById('sisikelp').value

    if (sisi == "" || isNaN(sisi) || sisi<=0) {
        alert('Masukkan angka yang valid')
        return
    }

    let keliling = 4 * sisi
    document.getElementById('hasilkelilingpersegi').innerHTML = `K = 4 x S <br> K = 4 x ${sisi} <br> K = ${keliling}`
}

//Reset Keliling Persegi
function resetKelilingPersegi(){
    document.getElementById('sisikelp').value = ""
    document.getElementById('hasilkelilingpersegi').innerHTML = ""
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
    document.getElementById('luaspersegipanjang').innerHTML = `L = p x l <br> L = ${panjang} x ${lebar} <br> L = ${luasPersegiPanjang}`
}

//Reset Luas Persegi Panjang
function resetLuasPersegiPanjang(){
    document.getElementById('panjang').value = ""
    document.getElementById('lebar').value = ""
    document.getElementById('luaspersegipanjang').innerHTML = ""
}

// Hitung keliling Persegi Panjang
function kelilingPersegiPanjang(){
    let panjang = parseInt(document.getElementById('panjangkel').value)
    let lebar = parseInt(document.getElementById('lebarkel').value)

    if(isNaN(panjang) || isNaN(lebar) || panjang <= 0 || lebar <= 0){
        alert('Masukkan angka yang valid')
        return
    }

    let kelilingPersegiPanjang = 2 * ((panjang + lebar))
    document.getElementById('kelilingpersegipanjang').innerHTML = `K = 2 x (p + l) <br> K = 2 x (${panjang} + ${lebar}) <br> K = ${kelilingPersegiPanjang}`

}

//reset Keliling Persegi Panjang
function resetKelilingPersegiPanjang(){
    document.getElementById('panjangkel').value = ""
    document.getElementById('lebarkel').value = ""
    document.getElementById('kelilingpersegipanjang').innerHTML = ""
}



