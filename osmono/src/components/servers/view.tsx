import { useEffect, useRef } from "react"
import Guacamole from 'guacamole-common-js';
export function ViewServer({server_id}) {

    const initialized = useRef(false)

    useEffect(() => {
            if (!initialized.current) {
                initialized.current = true

            console.log(server_id);
            // Get display div from document
            var display = document.getElementById("display");
            if (display == null) {
                throw("cant find display");
            }

            let tunnel = new Guacamole.WebSocketTunnel("ws://localhost:7070/?token=eyJpdiI6ImR6STJNRlFnUDhnQ0RSTlRWSHFBVGc9PSIsInZhbHVlIjoiUlZCbkNyYjhoc2k2V1V0SWwrUDF2R2I4aXFUcWIxYjNJcTFaOWY1UUlhNzhjNmpYUGFrcWpoK3RYQkJJUlJjOXRmVUZ4RzJRTURnb3MxbnVNM0tqL1ZUMEZWQURpSDdDZDZUeGF5U1g3UW9zb0FIaHpqditwRXpDUVVqS0ErWXB4aG1TZDc4NXl2bGJrWUZQQmtqbFpQaHQxMkozdkRjUWt4bVphZlZzd25CY2g3YlRRWXd3dlk1UDN0c3NEbHM3bVo4R2ZTT3NkTkV3V1JZTTdWVWdHc1o5NHlUUHJpYnowSEI2eFpWb0dBdmFSN1lZSHFIWHdLbnhRWnlteHZROEMrQmcvZHV6WFFqb1B5Smc0WXFyNUQvTXVIcW1pY2lGejU4OFhRUEZmNnNZT1JOT044cUJmMHdZWWN1eVF3RDUifQ%3D%3D")
            let guac = new Guacamole.Client(tunnel);


            tunnel.onerror = status => {
                // eslint-disable-next-line no-console
                console.error(`Tunnel failed ${JSON.stringify(status)}`)
            }
            guac.onerror = error => {
                guac.disconnect()
                // eslint-disable-next-line no-console
                console.error(`Client error ${JSON.stringify(error)}`)
              }

            // Instantiate client, using an HTTP tunnel for communications.
            // Add client to display div
            display.appendChild(guac.getDisplay().getElement());
            
            // Error handler
            guac.onerror = function(error) {
                console.error(error);
            };

            // Connect
            guac.connect();
        }
    }, [])


    return (
        <>
        <div className="h-screen w-screen" id="display"></div>

        <script type="text/javascript"> 

        </script>
        </>
    )
}