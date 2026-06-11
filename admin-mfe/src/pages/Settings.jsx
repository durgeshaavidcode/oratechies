import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import {
  Box,
  Card,
  CardContent,
  Grid,
  Stack,
  Typography,
  TextField,
  MenuItem,
  Button,
  Avatar,
} from "@mui/material";
import {
  Settings as SettingsIcon,
  Email,
  Sms,
  Payment,
  VerifiedUser,
  Notifications,
  Lock,
  People,
  ListAlt,
  Save,
} from "@mui/icons-material";
import PageHeader from "../components/PageHeader";

const SECTIONS = [
  { key: "general", label: "General Settings", icon: <SettingsIcon /> },
  { key: "email", label: "Email Settings", icon: <Email /> },
  { key: "sms", label: "SMS Settings", icon: <Sms /> },
  { key: "payment", label: "Payment Settings", icon: <Payment /> },
  { key: "kyc", label: "KYC Settings", icon: <VerifiedUser /> },
  { key: "notification", label: "Notification Settings", icon: <Notifications /> },
  { key: "security", label: "Security Settings", icon: <Lock /> },
  { key: "roles", label: "Roles & Permissions", icon: <People /> },
  { key: "logs", label: "System Logs", icon: <ListAlt /> },
];

function SectionCard({ title, subtitle, children, onSave }) {
  return (
    <Card sx={{ mb: 2 }}>
      <CardContent>
        <Stack direction="row" justifyContent="space-between" alignItems="flex-start" sx={{ mb: 2 }}>
          <Box>
            <Typography variant="h6">{title}</Typography>
            {subtitle && <Typography sx={{ color: "text.secondary", fontSize: 13 }}>{subtitle}</Typography>}
          </Box>
          <Button variant="contained" startIcon={<Save />} onClick={onSave}>
            Save Changes
          </Button>
        </Stack>
        {children}
      </CardContent>
    </Card>
  );
}

function GeneralSettings() {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      platformName: "Oracle Job Portal",
      platformTagline: "Connecting Talent with Opportunities",
      platformUrl: "https://jobs.oracle.com",
      supportEmail: "support@oracle.com",
      adminEmail: "admin@oracle.com",
      contactNumber: "98765 43210",
      timezone: "Asia/Kolkata",
      dateFormat: "DD MMM YYYY",
      timeFormat: "12",
    },
  });
  const onSubmit = (d) => console.log(d);
  return (
    <Box component="form" onSubmit={handleSubmit(onSubmit)}>
      <SectionCard
        title="General Settings"
        subtitle="Manage basic information about the platform."
        onSave={handleSubmit(onSubmit)}
      >
        <Grid container spacing={2}>
          {[
            ["platformName", "Platform Name"],
            ["platformTagline", "Platform Tagline"],
            ["platformUrl", "Platform URL"],
            ["supportEmail", "Support Email"],
            ["adminEmail", "Admin Email"],
            ["contactNumber", "Contact Number"],
          ].map(([name, label]) => (
            <Grid item xs={12} md={6} key={name}>
              <Typography sx={{ fontSize: 13, fontWeight: 500, mb: 0.5 }}>{label}</Typography>
              <Controller
                name={name}
                control={control}
                render={({ field }) => <TextField fullWidth size="small" {...field} />}
              />
            </Grid>
          ))}
        </Grid>
      </SectionCard>

      <SectionCard title="Timezone Settings" subtitle="Set the default timezone for the platform." onSave={handleSubmit(onSubmit)}>
        <Typography sx={{ fontSize: 13, fontWeight: 500, mb: 0.5 }}>Timezone</Typography>
        <Controller
          name="timezone"
          control={control}
          render={({ field }) => (
            <TextField select fullWidth size="small" {...field}>
              <MenuItem value="Asia/Kolkata">(GMT+05:30) India Standard Time (Asia/Kolkata)</MenuItem>
              <MenuItem value="UTC">(GMT+00:00) UTC</MenuItem>
              <MenuItem value="America/New_York">(GMT-05:00) Eastern Time</MenuItem>
            </TextField>
          )}
        />
      </SectionCard>

      <SectionCard title="Date & Time Format" subtitle="Configure how date and time are displayed across the platform." onSave={handleSubmit(onSubmit)}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Typography sx={{ fontSize: 13, fontWeight: 500, mb: 0.5 }}>Date Format</Typography>
            <Controller
              name="dateFormat"
              control={control}
              render={({ field }) => (
                <TextField select fullWidth size="small" {...field}>
                  <MenuItem value="DD MMM YYYY">DD MMM YYYY (29 May 2024)</MenuItem>
                  <MenuItem value="YYYY-MM-DD">YYYY-MM-DD</MenuItem>
                </TextField>
              )}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography sx={{ fontSize: 13, fontWeight: 500, mb: 0.5 }}>Time Format</Typography>
            <Controller
              name="timeFormat"
              control={control}
              render={({ field }) => (
                <TextField select fullWidth size="small" {...field}>
                  <MenuItem value="12">12 Hour (02:30 PM)</MenuItem>
                  <MenuItem value="24">24 Hour (14:30)</MenuItem>
                </TextField>
              )}
            />
          </Grid>
        </Grid>
      </SectionCard>
    </Box>
  );
}

function EmailSettings() {
  return (
    <SectionCard title="Email Configuration" subtitle="Configure the email system used to send emails from the platform.">
      <Grid container spacing={2}>
        {[
          ["From Name", "Oracle Job Portal"],
          ["Email Provider", "SMTP"],
          ["From Email", "noreply@oraclejobs.com"],
          ["SMTP Host", "smtp.sendgrid.net"],
          ["Reply To Email", "support@oraclejobs.com"],
          ["SMTP Port", "587"],
          ["Username", "apikey"],
          ["Password", "••••••••••••"],
        ].map(([l, v]) => (
          <Grid item xs={12} md={6} key={l}>
            <Typography sx={{ fontSize: 13, fontWeight: 500, mb: 0.5 }}>{l}</Typography>
            <TextField fullWidth size="small" defaultValue={v} />
          </Grid>
        ))}
      </Grid>
    </SectionCard>
  );
}

function SmsSettings() {
  return (
    <SectionCard title="SMS Configuration" subtitle="Configure SMS gateway and sender details.">
      <Grid container spacing={2}>
        {[
          ["SMS Provider", "Twilio"],
          ["SMS Gateway URL", "https://api.twilio.com/2010-04-01/Accounts"],
          ["Account SID", "AC**********************"],
          ["Phone Number (Twilio)", "+1 415 123 4567"],
          ["Auth Token", "••••••••••••"],
          ["Default Country Code", "+91 (India)"],
          ["From (Sender ID)", "ORACLEJOBS"],
        ].map(([l, v]) => (
          <Grid item xs={12} md={6} key={l}>
            <Typography sx={{ fontSize: 13, fontWeight: 500, mb: 0.5 }}>{l}</Typography>
            <TextField fullWidth size="small" defaultValue={v} />
          </Grid>
        ))}
      </Grid>
    </SectionCard>
  );
}

const PLACEHOLDER = (k) => (
  <SectionCard title={`${k} Settings`} subtitle="Configure your preferences.">
    <Typography sx={{ color: "text.secondary" }}>
      Configuration options for {k.toLowerCase()} will appear here.
    </Typography>
  </SectionCard>
);

const RENDER = {
  general: <GeneralSettings />,
  email: <EmailSettings />,
  sms: <SmsSettings />,
  payment: PLACEHOLDER("Payment"),
  kyc: PLACEHOLDER("KYC"),
  notification: PLACEHOLDER("Notification"),
  security: PLACEHOLDER("Security"),
  roles: PLACEHOLDER("Roles & Permissions"),
  logs: PLACEHOLDER("System Logs"),
};

export default function Settings() {
  const [active, setActive] = useState("general");
  return (
    <Box>
      <PageHeader title="Settings" subtitle="Manage platform settings and preferences." />
      <Grid container spacing={2}>
        <Grid item xs={12} md={3}>
          <Card>
            <CardContent sx={{ p: 1 }}>
              <Stack spacing={0.5}>
                {SECTIONS.map((s) => (
                  <Stack
                    key={s.key}
                    direction="row"
                    spacing={1.5}
                    alignItems="center"
                    sx={{
                      p: 1.25,
                      borderRadius: 1.5,
                      cursor: "pointer",
                      background: active === s.key ? "#EFF6FF" : "transparent",
                      color: active === s.key ? "primary.main" : "text.primary",
                      fontWeight: active === s.key ? 600 : 500,
                      "&:hover": { background: "#F1F5F9" },
                    }}
                    onClick={() => setActive(s.key)}
                  >
                    {s.icon}
                    <Typography sx={{ fontSize: 14, fontWeight: "inherit", color: "inherit" }}>{s.label}</Typography>
                  </Stack>
                ))}
              </Stack>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={9}>
          {RENDER[active]}
        </Grid>
      </Grid>
    </Box>
  );
}
