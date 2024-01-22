"use client";

// libs
import * as z from "zod";
import toast from "react-hot-toast";
import { zodResolver } from "@hookform/resolvers/zod";

// hooks
import { useForm } from "react-hook-form";

// additional components
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

// icons
import { SaveAllIcon } from "lucide-react";
import useLevelModal from "@/hooks/modals/useLevelModal";

// -------------------------------------------

// form schema definition
const formSchema = z.object({
  ID: z.number().optional(),
  GROUP_ID: z.string().min(2, {
    message: "please select a customer group from the list",
  }),
  COLOR_ID: z.number().min(1, "please select a color code for this level"),
  VALUE: z.string().min(2, {
    message: "every level needs a name, make it a good one",
  }),
  EXPLANATION: z.string().min(2, {
    message: "give the new level a description, some details about it",
  }),
});

const LevelForm = () => {
  // instantiate all the hooks and stuff
  const storeLevelModal = useLevelModal();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: storeLevelModal.defaultValues,
  });

  // function handlers
  const handleOnSubmit = (values: z.infer<typeof formSchema>) => {
    console.log("onSubmit: ", values);
  };
  return <div>LevelForm</div>;
};
export default LevelForm;
