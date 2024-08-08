import {StoryObj} from "@storybook/react";
import ReactMediaLibrary from "../ReactMediaLibrary";
import {ReactMediaLibraryProps} from "../../../../types";
import convertFileToBase64 from "../../../utils/convertFileToBase64";
import {storiesDefaultFileLibraryList} from "./_storiesDefaultFileLibraryList";
import {FileUploadStatus} from "../../FileUploadResult/FileUploadResult";

export type ReactMediaLibraryStory = StoryObj<typeof ReactMediaLibrary>;

export const storiesDefaultPrimaryArgs: ReactMediaLibraryProps = {
	multiSelect: false,
	size:3,
	translate : {
		titleModal:"Media Library",
		dragTitle: "Suelta los archivos aquí...",
		dragSubtitle:"Arrastre y suelte algunos archivos aquí o haga clic para seleccionar archivos",
		uploadFailed:"Fallido",
		uploadProssesing:"Procesando",
		uploadSuccess:"Correcto",
		uploadFiles:"Subir archivos",
		browseFiles:"Búsqueda de archivos",
		nofiles:"No files available. Please upload a file.",
		uploadedFiles:"Archivos subidos",
		deleteFile:"Borrar {%n} archivo",
		selectFile:"Seleccione {%n} archivo"
	},
	isOpen: true,
	onClose: () => {
	},
	fileUploadCallback: storiesDefaultFileUploadCallback,
	fileLibraryList: storiesDefaultFileLibraryList,
	filesSelectCallback: (items) => alert(`Selected items ${items.map(i => i._id).join(", ")}`),
	filesDeleteCallback: (items) => alert(`Deleted items ${items.map(i => i._id).join(", ")}`),
	finishUploadCallback: (uploadFiles) => alert(`Uploaded ${uploadFiles.filter(f => f.status === FileUploadStatus.SUCCESS).length}/${uploadFiles.length} files!`),
};

async function storiesDefaultFileUploadCallback(file: File): Promise<boolean> {
	try {
		const fileBase64 = await convertFileToBase64(file);
		alert(`Upload file ${file.name}\n ${fileBase64}`);
		return true;
	} catch {
		return false;
	}
}
