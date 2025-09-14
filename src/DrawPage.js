import React, { useRef, useState } from "react";
import { Excalidraw } from "@excalidraw/excalidraw";
import { supabase } from "./supabaseClient";
import FancyButton from "./FancyButton"; // Importa o novo componente

export default function DrawPage() {
  const excalidrawRef = useRef(null);
  const [excalidrawAPI, setExcalidrawAPI] = useState(null);

  const handleSave = async () => {
    if (excalidrawAPI) {
      const elements = excalidrawAPI.getElements();

      const projectData = {
        elements: JSON.stringify(elements),
      };

      try {
        const { data, error } = await supabase
          .from('sua_tabela')
          .insert([projectData]);

        if (error) {
          console.error('Erro ao salvar projeto:', error);
        } else {
          console.log('Projeto salvo com sucesso!', data);
        }
      } catch (e) {
        console.error('Ocorreu uma exceção:', e);
      }
    }
  };
  
  const handleLoad = () => {
    console.log("Função para carregar o projeto será implementada aqui.");
  };

  return (
    <div 
      style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        height: '100vh', 
        width: '100vw',
        position: 'relative' // Adicionado para estabelecer o contexto de posicionamento
      }}
    >
      {/* Top Nav Bar */}
      <div 
        style={{
          display: 'flex',
          gap: 36,
          padding: 16,
          backgroundColor: '#ffffff',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'relative', // Essencial para o zIndex funcionar
          zIndex: 10 // Coloca a barra de navegação acima do Excalidraw
        }}
      >
        <FancyButton
          onClick={handleSave}
          style={{
            height: 48,
            width: 320,
            borderRadius: 24,
            border: 'none',
            padding: '0 24px',
            cursor: 'pointer',
            backgroundColor: '#f1f4f8',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
          }}
        >
          Salvar Projeto
        </FancyButton>

        <FancyButton
          onClick={handleLoad}
          style={{
            height: 48,
            width: 320,
            borderRadius: 24,
            border: 'none',
            padding: '0 24px',
            cursor: 'pointer',
            backgroundColor: '#f1f4f8',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
          }}
        >
          Carregar Projeto
        </FancyButton>
      </div>
      {/* Excalidraw Canvas */}
      <Excalidraw
        ref={excalidrawRef}
        initialData={{ elements: [], appState: { gridSize: 20 } }}
        onExcalidrawAPI={(api) => setExcalidrawAPI(api)}
        style={{ flex: 1 }}
      />
    </div>
  );
}