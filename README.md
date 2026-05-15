# Aero Trainer VR Box

Protótipo web para treinamento visual em telefone, com uso em VR Box e interação por mouse, toque ou trackpad.

## Como abrir

Na pasta do projeto:

```powershell
node dev-server.mjs
```

Se o Windows disser que `node` não foi reconhecido, use um dos atalhos criados na pasta:

```powershell
.\iniciar-servidor.ps1
```

Ou dê duplo clique em:

```text
iniciar-servidor.bat
```

No computador:

```text
http://localhost:5173
```

No telefone, use o IP do computador na mesma rede Wi-Fi:

```text
http://SEU-IP-LOCAL:5173
```

Depois toque em `Modo VR Box`, coloque o telefone no suporte VR Box e use um mouse Bluetooth/USB para clicar nos pontos.

O botão `Giroscopio` tenta usar os sensores de orientação do telefone para mover a visão 360. Em iPhone e alguns navegadores Android, o sensor pode exigir HTTPS e sempre precisa ser ativado por toque no botão.

Se aparecer a mensagem `este aparelho nao informou suporte a orientacao do aparelho`, as causas mais comuns sao:

- o teste esta sendo feito no computador, que normalmente nao possui esse sensor no navegador;
- o telefone abriu a aplicacao por `http://IP-DO-COMPUTADOR:5173`, e o navegador bloqueou sensores por falta de HTTPS;
- o navegador do telefone nao expoe `DeviceOrientationEvent`.

Para testar giroscopio de forma confiavel, publique a pasta como site HTTPS temporario, por exemplo em Vercel, Netlify ou GitHub Pages. O modo mouse/toque continua funcionando em HTTP local.

## Imagens 360 da Insta360 X5

Exporte a imagem como panorama equiretangular 2:1. Exemplo: `6000x3000`, `8192x4096` ou proporção equivalente.

Crie a pasta:

```text
assets/panoramas/
```

Salve a imagem, por exemplo:

```text
assets/panoramas/inspecao-asa.jpg
```

No arquivo `app.js`, altere o campo `panorama` do módulo:

```js
panorama: "assets/panoramas/inspecao-asa.jpg"
```

## Hotspots em imagem 360

Cada ponto usa coordenadas normalizadas:

```js
{
  title: "Bordo de ataque",
  text: "Instrucao exibida ao usuario.",
  yaw: 0.22,
  pitch: -0.08,
  color: "#40c4a4"
}
```

`yaw` vai de `0` a `1` ao redor da imagem. `pitch` controla altura: valores negativos ficam mais acima, positivos mais abaixo.

## Permissões necessárias

No telefone, normalmente basta permitir:

- tela cheia, quando o navegador pedir;
- movimento/orientacao do dispositivo, quando usar `Giroscopio`;
- uso de mouse Bluetooth/USB no sistema do telefone;
- acesso à rede local, se o navegador/sistema pedir ao abrir pelo IP.

Este protótipo não usa câmera, microfone, geolocalização nem WebXR.

## Modulo demonstrativo: Cessna 172

O primeiro modulo agora e uma visita virtual chamada `O que e um aviao`, usando um Cessna 172 como referencia didatica.

Ele possui etapas:

- Visao geral do Cessna 172
- Cabine e painel
- Superficies de comando
- Motor e helice
- Trem de pouso

As cenas atuais usam panoramas 360 gerados para o projeto. Para transformar em material real, voce pode substituir cada etapa por uma foto 360 da sua Insta360 X5 ou por uma arte gerada especificamente para treinamento.

A primeira etapa tambem usa um panorama 360 gerado para o projeto:

```text
assets/panoramas/cessna-172-apron-360.png
assets/panoramas/cessna-172-cockpit-360.png
assets/panoramas/cessna-172-control-surfaces-360.png
assets/panoramas/cessna-172-engine-propeller-360.png
assets/panoramas/cessna-172-landing-gear-360.png
```

Esses arquivos sao usados como cenas demonstrativas realistas. Depois voce pode substituir por panoramas capturados com a Insta360 X5.

No `app.js`, a estrutura fica em:

```js
{
  id: "cessna-tour",
  title: "O que e um aviao",
  stages: [...]
}
```

Cada etapa possui `title`, `summary`, `checklist`, `nodes` e um tipo de desenho em `diagram`.
