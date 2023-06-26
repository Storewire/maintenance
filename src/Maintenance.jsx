import {Component} from "react";
import icon from "./assets/icon.png";

export class Maintenance extends Component {
	render() {
		return (
			<div className="bg-gray-200 flex flex-col items-center justify-center h-screen text-center">
			<img
					src={icon}
					alt="Storewire B.V."
					className="mx-auto h-16 w-auto"
				/>
				<h1 className="text-4xl font-bold mt-6">
					Storewire wordt momenteel bijgewerkt
				</h1>
				<p className="text-gray-700 mt-2 max-w-2xl">
					We zijn momenteel bezig met kritische onderhoudswerkzaamheden aan onze applicatie. Tijdens dit onderhoud is het helaas niet mogelijk om in te loggen. Probeer het later nog eens. Onze excuses voor het ongemak.
				</p>
				<div className="mt-7">
					<a href="https://status.storewire.net" target="_blank" className="mt-5 rounded-full bg-white px-2.5 py-1 text-xs font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50" rel="noreferrer">
						Statuspagina
					</a>
					<a href="" className="ml-2 rounded-full bg-white px-2.5 py-1 text-xs font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
						Pagina herladen
					</a>
					<a href="mailto:info@storewire.net" className="ml-2 rounded-full bg-white px-2.5 py-1 text-xs font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
						Contacteer support
					</a>
				</div>
			</div>
		)
	}
}