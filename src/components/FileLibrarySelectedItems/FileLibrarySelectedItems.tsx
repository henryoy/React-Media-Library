import React, {ReactElement, useContext} from "react";
import {ReactMediaLibraryContext} from "../../context/ReactMediaLibraryContext";
import {FileLibrarySelectedItemsCard} from "../FileLibrarySelectedItemsCard";
import {FileLibrarySelectedItemsProps} from "../../../types";

const FileLibrarySelectedItems: React.FC<FileLibrarySelectedItemsProps> = ({
	itemComponent = (item) => (<FileLibrarySelectedItemsCard{...item} />),
}: FileLibrarySelectedItemsProps): ReactElement => {
	const {translate, selectedItems, filesSelectCallback, filesDeleteCallback} = useContext(ReactMediaLibraryContext);

	return (
		<div
			className="react-media-library__file-library-selected-items"
		>
			<ul className="react-media-library__file-library-selected-items__list">
				{selectedItems.map((item) => (
					<li
						key={`item-${item._id}`}
						className="react-media-library__file-library-selected-items__list__item"
					>
						{itemComponent?.(item)}
					</li>
				))}
			</ul>

			<div className="react-media-library__file-library-selected-items__actions">
				{(filesDeleteCallback !== undefined) && (
					<button
						type="button"
						className="react-media-library__file-library-selected-items__actions__delete"
						onClick={() => filesDeleteCallback?.(selectedItems)}
					>	
					{
						translate ? 
							`${translate.deleteFile.replace("{%n}",`${selectedItems.length > 1 ? selectedItems.length : ""}`) }${selectedItems.length > 1 ? "s" : ""}`
						:
						(
							`Delete ${selectedItems.length > 1 ? selectedItems.length : ""} File${selectedItems.length > 1 ? "s" : ""}`
						)
					}					
						
					</button>
				)}
				<button
					type="button"
					className="react-media-library__file-library-selected-items__actions__select"
					onClick={() => filesSelectCallback!(selectedItems)}
				>
					{
						translate ? 
							`${translate.selectFile.replace("{%n}",`${selectedItems.length > 1 ? selectedItems.length : ""}`) }${selectedItems.length > 1 ? "s" : ""}`
						:
						(
							`Select ${selectedItems.length > 1 ? selectedItems.length : ""} File${selectedItems.length > 1 ? "s" : ""}`
						)
					}
				</button>

			</div>
		</div>
	);
};

export default FileLibrarySelectedItems;
