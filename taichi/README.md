# Tai Chi Suave 55+

Aplicacion HTML accesible para practicar una rutina breve de Tai Chi/Chi Kung para principiantes
de 55 anos o mas. El contenido se adapto desde el notebook `The Essential Guide to Tai Chi for
Beginners` usando secuencias e instrucciones de practica basica.

## Como abrir

Abre `index.html` en un navegador moderno. La app no usa dependencias externas, asi que funciona
offline para la rutina, animaciones, temporizador y progreso local.

Para probar la camara espejo, algunos navegadores exigen `localhost`. Puedes servir la carpeta con:

```powershell
python -m http.server 4173
```

Luego abre:

```text
http://127.0.0.1:4173
```

## Rutina incluida

1. Postura inicial y cuello suave, 1:30.
2. Elevacion y empuje de brazos, 2:00.
3. Balanceo y giro de tronco, 2:30.
4. Respiracion Tan Tien, 1:45.
5. Giro suave y cierre, 1:30.

Duracion total aproximada: 9:15 a velocidad normal.

## Accesibilidad

- Texto base grande.
- Botones tactiles de al menos 52 px.
- Modo alto contraste.
- Modo texto grande.
- Foco visible para teclado.
- Mensajes `aria-live`.
- Estructura semantica con encabezados, listas, etiquetas y regiones.
- Modo sentado o bajo impacto para movilidad reducida.
- Respeta `prefers-reduced-motion`.

## Video real

La app deja preparado un espacio para video real. Cuando tengas una demostracion grabada, coloca:

```text
assets/tai-chi-demo.mp4
```

La animacion vectorial funciona aunque no exista ese video.

## Privacidad

El progreso se guarda en `localStorage`, solo en este dispositivo. La camara espejo, si se activa,
no graba ni envia video a ningun servidor.

## Salud y seguridad

La app no sustituye consejo medico. Recomienda consultar con un profesional si hay condiciones
previas, detenerse ante dolor, mareo o falta de aire, y practicar con calzado estable y movimientos
sin fuerza.
