import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import reportWebVitals from "./reportWebVitals";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";
i18next
	.use(HttpApi)
	.use(LanguageDetector)
	.use(initReactI18next)
	.init({
		supportedLngs: ["ar", "en"],
		fallbackLng: "en",
		debug: false,
		// Options for language detector
		detection: {
			order: ["path", "cookie", "htmlTag"],
			caches: ["cookie"],
		},
		// react: { useSuspense: false },
		backend: {
			loadPath: "/assets/locales/{{lng}}/translation.json",
		},
	});
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
