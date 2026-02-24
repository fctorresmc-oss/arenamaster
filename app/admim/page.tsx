"use client";

import { useState } from "react";

export default function AdminPage() {
  const [tab,setTab]=useState("agenda");

  return (
    <div style={{padding:20}}>
      <h1>Painel Admin — Arena</h1>

      <div style={{display:"flex",gap:10,marginBottom:20}}>
        <button onClick={()=>setTab("agenda")}>Agenda</button>
        <button onClick={()=>setTab("reservas")}>Reservas</button>
        <button onClick={()=>setTab("campeonatos")}>Campeonatos</button>
        <button onClick={()=>setTab("times")}>Times</button>
        <button onClick={()=>setTab("anuncios")}>Anúncios</button>
        <button onClick={()=>setTab("dono")}>Dono da Quadra</button>
        <button onClick={()=>setTab("usuarios")}>Usuários</button>
      </div>

      {tab==="agenda" && <div>Configurar horários e quadras</div>}
      {tab==="reservas" && <div>Lista reservas + push</div>}
      {tab==="campeonatos" && <div>Criar campeonato completo</div>}
      {tab==="times" && <div>Editar times + escudos + link capitão</div>}
      {tab==="anuncios" && <div>Upload até 4 banners rotativos</div>}
      {tab==="dono" && <div>Configurar dono da quadra e desafios</div>}
      {tab==="usuarios" && <div>Gerenciar clientes + reset senha</div>}
    </div>
  );
}
