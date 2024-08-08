# React Media Library

Have you ever worked with WordPress? If not, count your blessings. :)

But seriously, using a CMS like WordPress does provide a lot of useful features. 
The feature I miss most as a MERN developer is the media library browser.
All image fields are edited using a modal where you can select something previously uploaded or drag-and-drop new images
from your file browser.
Well, now you can have something similar for your React app.

Note: this only includes the UI; everybody's app is different, so I can't write your API connections for you.

## Installation

Install it via npm in your project.

```
npm install react-media-library-hoy --save
```

## Documentation / Examples

See [Storybook](https://richard1320.github.io/React-Media-Library/).

## Extra

it is only extended to validate the size of the image to be loaded and the language.

the size to be passed is in MB

```js
    size={1}    
```

```js
 translate = {{
            titleModal:"Multimedia",
            dragTitle: "Suelta los archivos aquí...",
            dragSubtitle:"Arrastre y suelte algunos archivos aquí o haga clic para seleccionar archivos",
            uploadError: "Peso no valido",
            uploadFailed:"Fallido",
            uploadProssesing:"Procesando",
            uploadSuccess:"Correcto",
            uploadFiles:"Subir archivos",
            browseFiles:"Búsqueda de archivos",
            nofiles:"No hay archivos disponibles. Por favor cargue un archivo.",
            uploadedFiles:"Archivos subidos",
            deleteFile:"Borrar {%n} archivo",
            selectFile:"Seleccione {%n} archivo"
          }}
```
```js
 <ReactMediaLibrary       
          fileLibraryList={fileLibraryList}
          fileUploadCallback={fileUploadCallback}
          filesDeleteCallback={fileDeleteCallback}
          filesSelectCallback={fileSelectCallback}
          finishUploadCallback={finishUploadCallback}
          isOpen={isOpen}
          multiSelect
          modalTitle={`Multimedia`}
          onClose={onClose}
          size={2}
          translate = {{
            titleModal:"Multimedia",
            dragTitle: "Suelta los archivos aquí...",
            dragSubtitle:"Arrastre y suelte algunos archivos aquí o haga clic para seleccionar archivos",
            uploadError: "Peso no valido",
            uploadFailed:"Fallido",
            uploadProssesing:"Procesando",
            uploadSuccess:"Correcto",
            uploadFiles:"Subir archivos",
            browseFiles:"Búsqueda de archivos",
            nofiles:"No hay archivos disponibles. Por favor cargue un archivo.",
            uploadedFiles:"Archivos subidos",
            deleteFile:"Borrar {%n} archivo",
            selectFile:"Seleccione {%n} archivo"
          }           
          }
        />
```