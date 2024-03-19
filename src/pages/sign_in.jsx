import { Button, Center, Group, Input, Stack, TextInput } from "@mantine/core";
import { Form, useForm, zodResolver } from "@mantine/form";
import { useNavigate } from "react-router-dom";
import { z } from "zod";

const schema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Must be at least 6 characters"),
});

const SignIn = () => {
  const navigate = useNavigate();
  const form = useForm({
    initialValues: {
      email: "",
      password: "",
    },
    validate: zodResolver(schema),
  });

  return (
    <Center className="w-screen h-screen">
      <form onSubmit={form.onSubmit((values) => navigate("/home"))}>
        <Stack>
          <TextInput
            withAsterisk
            placeholder="your@email.com"
            {...form.getInputProps("email")}
          />
          <TextInput
            withAsterisk
            placeholder="password"
            {...form.getInputProps("password")}
          />

          <Button type="submit">Submit</Button>
        </Stack>
      </form>
    </Center>
  );
};
export default SignIn;
