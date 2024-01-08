import { UUID } from "crypto";

export interface User {
    email: string,
    user_id: UUID,
    first_name?: string,
    last_name?: string
}
