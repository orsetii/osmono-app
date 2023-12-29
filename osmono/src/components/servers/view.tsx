import { useEffect } from "react"
import Guacamole from 'guacamole-common-js';
export function ViewServer({server_id}) {

    useEffect(() => {

        console.log(server_id);
            // Get display div from document
            var display = document.getElementById("display");
            if (display == null) {
                throw("cant find display");
            }

            // Instantiate client, using an HTTP tunnel for communications.
            var guac = new Guacamole.Client(
                new Guacamole.HTTPTunnel("http://localhost:4567/tunnel")
            );
            // Add client to display div
            display.appendChild(guac.getDisplay().getElement());
            
            // Error handler
            guac.onerror = function(error) {
                alert(error);
            };

            // Connect
            guac.connect();
    })


    return (
        <>
        <div className="h-screen w-screen" id="display"></div>

        <script type="text/javascript"> 

        </script>
        </>
    )
}