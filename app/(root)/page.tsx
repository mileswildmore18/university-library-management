// import dependencies and button
import Image from "next/image";
import {Button} from "@/components/ui/button";
import BookOverview from "@/components/BookOverview";
import BookList from "@/components/BookList";
import {sampleBooks} from "@/constants";
import {db} from "../../database/drizzle";
import {users} from "../../database/schema";

// Define the Home component with the database information
const Home = async () => {
    const result = await db.select().from(users);
    // Print the database information
    console.log(JSON.stringify(result, null, 2))
    return (
 <>
    <BookOverview {...sampleBooks[0]}/>
    <BookList
    title="Latest Books"
    books={sampleBooks}
    containerClassName="mt-28"
    />
</>
    );
};
export default Home;
