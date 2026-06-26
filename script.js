/* ===== Banner Principal ===== */

.hero{
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding:60px;
    background:linear-gradient(135deg,#1b5e20,#4caf50);
    color:white;
    gap:40px;
}

.hero-texto{
    width:50%;
}

.hero-texto h1{
    font-size:55px;
    margin-bottom:15px;
}

.hero-texto h2{
    font-size:30px;
    margin-bottom:20px;
}

.hero-texto p{
    font-size:18px;
    margin-bottom:12px;
}

.hero-imagem{
    width:45%;
}

.hero-imagem img{
    width:100%;
    border-radius:20px;
    box-shadow:0 10px 25px rgba(0,0,0,.3);
}

.botao{
    display:inline-block;
    margin-top:20px;
    background:white;
    color:#2e7d32;
    padding:15px 30px;
    border-radius:40px;
    text-decoration:none;
    font-weight:bold;
    transition:.3s;
}

.botao:hover{
    background:#dcedc8;
}

@media(max-width:768px){

.hero{
    flex-direction:column;
    text-align:center;
}

.hero-texto,
.hero-imagem{
    width:100%;
}

.hero-texto h1{
    font-size:38px;
}

.hero-texto h2{
    font-size:24px;
}

}
