'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '@/components/ui/select';

import { Toaster, toast } from "sonner";

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  location: z.string().min(2, "Location is required"),
  feeRange: z.string().min(1, "Fee is required")
});

type FormData = z.infer<typeof formSchema>;

export default function OnboardingForm() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors }
  } = useForm<FormData>({
    resolver: zodResolver(formSchema)
  });

  const onSubmit = (data: FormData) => {
    console.log("Form submitted:", data);
    toast.success("Artist profile submitted 🎉");
  };

  return (
    <div className="max-w-xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">🎭 Artist Onboarding</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <div>
          <Label htmlFor="name">Artist Name</Label>
          <Input id="name" {...register("name")} placeholder="Enter artist name" />
          {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
        </div>

        <div>
          <Label htmlFor="location">Location</Label>
          <Input id="location" {...register("location")} placeholder="Enter city or state" />
          {errors.location && <p className="text-red-500 text-sm">{errors.location.message}</p>}
        </div>

        <div>
          <Label htmlFor="feeRange">Fee Range</Label>
          <Select onValueChange={(val) => setValue("feeRange", val)}>
            <SelectTrigger>
              <SelectValue placeholder="Select fee range" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="low">₹500–₹1000</SelectItem>
              <SelectItem value="medium">₹1000–₹5000</SelectItem>
              <SelectItem value="high">₹5000+</SelectItem>
            </SelectContent>
          </Select>
          {errors.feeRange && <p className="text-red-500 text-sm">{errors.feeRange.message}</p>}
        </div>

        <Button type="submit" className="w-full">Submit</Button>
      </form>

      <Toaster />
    </div>
  );
}
