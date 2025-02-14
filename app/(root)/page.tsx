// import dependencies and button
import Image from "next/image";
import {Button} from "@/components/ui/button";
import BookOverview from "@/components/BookOverview";
import BookList from "@/components/BookList";

const Home = () => <>
    <BookOverview/>
    <BookList/>
</>;

export default Home;
