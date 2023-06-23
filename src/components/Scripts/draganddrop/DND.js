import React from "react";
import DragAndDrop from "./Draganddrop";
import "../../individual/Individual.css";
import { useTranslation } from "react-i18next";

const DND = (props) => {
	const { t } = useTranslation();
	const reducer = (state, action) => {
		switch (action.type) {
			case "SET_DROP_DEPTH":
				return { ...state, dropDepth: action.dropDepth };
			case "SET_IN_DROP_ZONE":
				return { ...state, inDropZone: action.inDropZone };
			case "ADD_FILE_TO_LIST":
				return {
					...state,
					fileList: state.fileList.concat(action.files),
				};
			default:
				return state;
		}
	};

	const [data, dispatch] = React.useReducer(reducer, {
		dropDepth: 0,
		inDropZone: false,
		fileList: [],
	});

	return (
		<div
			className="fileselector"
			style={{
				backgroundImage: "url('" + props.uploadedImageURL + "')",
				backgroundRepeat: "no-repeat",
				backgroundPosition: "center",
			}}
			onClick={() => {
				document.getElementById("fileselectorinput").click();
			}}>
			<DragAndDrop data={data} dispatch={dispatch} />
			{/* <img src={fileselector} alt="Upload File" /> */}
			{t("scripts.dnd.heading")}
			<div>{t("scripts.dnd.or")}</div>
			<button>{t("scripts.dnd.browse")}</button>
		</div>
	);
};

export default DND;
