"use client";

import { useRouter } from "next/navigation";
import React, { useRef, useState } from "react";
import { toast } from "sonner";
import { Calendar } from "@/components/ui/calendar";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";

const ContactFormPermission: React.FC = () => {
  const router = useRouter();
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [startDate, setStartDate] = useState<Date>();
  const [endDate, setEndDate] = useState<Date>();
  const [selectedAssets, setSelectedAssets] = useState<string[]>([]);
  const [isGlobalCampaign, setIsGlobalCampaign] = useState(false);
  const [hasContact, setHasContact] = useState(false);
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  const audienceReachOptions = [
    "0 to 10,000",
    "10,001 to 20,000",
    "20,001 to 40,000",
    "40,001 to 60,000",
    "60,001 to 100,000",
    "500,000+",
  ];

  const mediaValueOptions = [
    "$0 to $25,000",
    "$25,0001 to $100,000",
    "$100,001 to $500,000",
    "$500,000+",
  ];

  const assetOptions = [
    "Color Logo",
    "Black Wordmark",
    "White Wordmark",
    "Red Watermark",
  ];

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;
    if (!agreedToTerms) {
      toast.error("Please agree to the terms and conditions");
      return;
    }

    const formData = new FormData(formRef.current);

    const data = {
      first_name: formData.get("fname"),
      last_name: formData.get("lname"),
      email: formData.get("email"),
      subject: formData.get("subject"),
      featured_product: formData.get("featured_product"),
      detailed_summary: formData.get("detailed_summary"),
      campaign_start_date: startDate,
      campaign_end_date: endDate,
      audience_reach: formData.get("audience_reach"),
      media_value: formData.get("media_value"),
      is_global_campaign: isGlobalCampaign,
      country: formData.get("country"),
      has_contact: hasContact,
      contact_first_name: formData.get("contact_fname"),
      contact_last_name: formData.get("contact_lname"),
      contact_email: formData.get("contact_email"),
      selected_assets: selectedAssets,
      file_link: formData.get("file_link"),
      agreed_to_terms: agreedToTerms,
    };

    setLoading(true);

    try {
      const response = await fetch("/api/sendEmailPermission", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      if (response.ok) {
        toast.success("Permission request sent successfully!");
        formRef.current.reset();
        router.push("/thank-you/");
      } else {
        toast.error(result.error || "Failed to send permission request.");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative flex items-center justify-center min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="w-full max-w-3xl space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight">
            Permission Request Form
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Please fill out all required fields
          </p>
        </div>

        <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
          {/* Name Fields */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="fname">First Name</Label>
              <Input
                id="fname"
                name="fname"
                required
                placeholder="First Name"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lname">Last Name</Label>
              <Input id="lname" name="lname" required placeholder="Last Name" />
            </div>
          </div>

          {/* Email and Subject */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                placeholder="Email Address"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="subject">Subject</Label>
              <Input
                id="subject"
                name="subject"
                required
                placeholder="Subject"
              />
            </div>
          </div>

          {/* Featured Product and Summary */}
          <div className="space-y-2">
            <Label htmlFor="featured_product">Featured Product/Client</Label>
            <Input
              id="featured_product"
              name="featured_product"
              required
              placeholder="Featured Product or Client Name"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="detailed_summary">Detailed Summary</Label>
            <Textarea
              id="detailed_summary"
              name="detailed_summary"
              required
              placeholder="Detailed summary of request, commercial, film, or program"
              className="min-h-[100px]"
            />
          </div>

          {/* Campaign Dates */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="space-y-2">
              <Label>Campaign Start Date</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full justify-start text-left font-normal",
                      !startDate && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {startDate ? format(startDate, "PPP") : "Pick a date"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    defaultMonth={startDate}
                    fromDate={new Date()}
                    selected={startDate}
                    onSelect={setStartDate}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>
            <div className="space-y-2">
              <Label>Campaign End Date</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full justify-start text-left font-normal",
                      !endDate && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {endDate ? format(endDate, "PPP") : "Pick a date"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    defaultMonth={endDate}
                    fromDate={startDate || new Date()}
                    selected={endDate}
                    onSelect={setEndDate}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>
          </div>

          {/* Audience Reach and Media Value */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="space-y-2">
              <Label>Audience Reach</Label>
              <Select name="audience_reach" required>
                <SelectTrigger>
                  <SelectValue placeholder="Select range" />
                </SelectTrigger>
                <SelectContent>
                  {audienceReachOptions.map((option) => (
                    <SelectItem key={option} value={option}>
                      {option}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>Estimated Media Value</Label>
              <Select name="media_value" required>
                <SelectTrigger>
                  <SelectValue placeholder="Select range" />
                </SelectTrigger>
                <SelectContent>
                  {mediaValueOptions.map((option) => (
                    <SelectItem key={option} value={option}>
                      {option}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Target Locations */}
          <div className="space-y-4">
            <Label>Target Locations</Label>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="global_campaign"
                  checked={isGlobalCampaign}
                  onCheckedChange={(checked) =>
                    setIsGlobalCampaign(checked as boolean)
                  }
                />
                <label htmlFor="global_campaign">
                  This is a global campaign
                </label>
              </div>
            </div>
            {!isGlobalCampaign && (
              <div className="space-y-2">
                <Label htmlFor="country">Enter Country</Label>
                <Input
                  id="country"
                  name="country"
                  required={!isGlobalCampaign}
                  placeholder="Country name"
                />
              </div>
            )}
          </div>

          {/* Contact Person */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="has_contact"
                checked={hasContact}
                onCheckedChange={(checked) => setHasContact(checked as boolean)}
              />
              <Label htmlFor="has_contact">
                Do you have a Paint Innovators contact for this request?
              </Label>
            </div>

            {hasContact && (
              <div className="space-y-4">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="contact_fname">Contact First Name</Label>
                    <Input
                      id="contact_fname"
                      name="contact_fname"
                      required={hasContact}
                      placeholder="Contact First Name"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="contact_lname">Contact Last Name</Label>
                    <Input
                      id="contact_lname"
                      name="contact_lname"
                      required={hasContact}
                      placeholder="Contact Last Name"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="contact_email">Contact Email</Label>
                  <Input
                    id="contact_email"
                    name="contact_email"
                    type="email"
                    required={hasContact}
                    placeholder="Contact Email Address"
                  />
                </div>
              </div>
            )}
          </div>

          {/* Selected Assets */}
          <div className="space-y-4">
            <Label>Selected Assets</Label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {assetOptions.map((asset) => (
                <div key={asset} className="flex items-center space-x-2">
                  <Checkbox
                    id={`asset_${asset}`}
                    checked={selectedAssets.includes(asset)}
                    onCheckedChange={(checked) => {
                      if (checked) {
                        setSelectedAssets([...selectedAssets, asset]);
                      } else {
                        setSelectedAssets(
                          selectedAssets.filter((a) => a !== asset)
                        );
                      }
                    }}
                  />
                  <Label htmlFor={`asset_${asset}`}>{asset}</Label>
                </div>
              ))}
            </div>
          </div>

          {/* File Link */}
          <div className="space-y-2">
            <Label htmlFor="file_link">File Link</Label>
            <Input
              id="file_link"
              name="file_link"
              type="url"
              required
              placeholder="https://"
            />
            <p className="text-sm text-muted-foreground">
              Provide the file(s) that are part of your request
            </p>
          </div>

          {/* Terms Agreement */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="terms"
                checked={agreedToTerms}
                onCheckedChange={(checked) =>
                  setAgreedToTerms(checked as boolean)
                }
                required
              />
              <Label htmlFor="terms" className="text-sm">
                By submitting, you agree to abide by the Brand Usage Guidelines
                as well as Paint Innovators terms & policies.
              </Label>
            </div>
          </div>

          <Button
            type="submit"
            className="w-full"
            disabled={loading || !agreedToTerms}
          >
            {loading ? "Sending..." : "Submit Request"}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ContactFormPermission;
