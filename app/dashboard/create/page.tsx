import { handleSubmission } from "@/app/actions";
import { SubmitButton } from "@/components/general/SubmitButton";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@radix-ui/react-label";

export default function CreateBlogRoute() {

    return (
    <Card className="max-w-lg mx-auto">
        <CardHeader>
            <CardTitle>Create Post</CardTitle>
            <CardDescription>Create a new blog post.</CardDescription>
        </CardHeader>
        <CardContent>
            <form  className="flex flex-col gap-4" action={handleSubmission}>
                <div className="flex flex-col gap-2">
                    <Label>Title</Label>
                    <Input name="title" required type="text" placeholder="Title"/>
                </div>
                <div className="flex flex-col gap-2">
                    <Label>Content</Label>
                    <Textarea  name="content" required placeholder="Content here . . ."/>
                </div>
                <div className="flex flex-col gap-2">
                    <Label>Image URL</Label>
                    <Input name="url" required type="text" placeholder="Image URL"/>
                </div>
                <SubmitButton />
            </form>
        </CardContent>
    </Card>
  );
}