import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { mockUserProfile } from "@/lib/mockData";
import { Camera, Mail, User, Lock } from "lucide-react";
import { toast } from "sonner";

interface UpdateProfilePageProps {
  onBack: () => void;
}

const UpdateProfilePage = ({ onBack }: UpdateProfilePageProps) => {
  const [profile, setProfile] = useState(mockUserProfile);
  const [isEditingProfile, setIsEditingProfile] = useState(false);
  const [isEditingPassword, setIsEditingPassword] = useState(false);

  const [username, setUsername] = useState(profile.username);
  const [email, setEmail] = useState(profile.email);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleProfileUpdate = () => {
    setProfile({ ...profile, username, email });
    setIsEditingProfile(false);
    toast.success("Profile updated successfully!");
  };

  const handlePasswordUpdate = () => {
    if (newPassword !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }
    setIsEditingPassword(false);
    setCurrentPassword("");
    setNewPassword("");
    setConfirmPassword("");
    toast.success("Password updated successfully!");
  };

  const handleImageUpload = () => {
    toast.info("Image upload would be implemented here");
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="mb-8">
          <Button variant="outline" onClick={onBack} className="mb-4">
            ← Back to Dashboard
          </Button>
          <h1 className="text-3xl font-bold mb-2 bg-gradient-cyber bg-clip-text text-transparent">
            Profile Settings
          </h1>
          <p className="text-muted-foreground">Manage your account information and security settings</p>
        </div>

        <div className="space-y-6">
          {/* Profile Picture */}
          <Card className="bg-card border-border shadow-glow-cyan animate-fade-in">
            <CardHeader>
              <CardTitle>Profile Picture</CardTitle>
              <CardDescription>Update your profile picture</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-6">
                <Avatar className="w-24 h-24 border-2 border-primary">
                  <AvatarImage src={profile.profilePicture} alt={profile.username} />
                  <AvatarFallback className="bg-primary/10 text-primary text-2xl">
                    {profile.username.charAt(0).toUpperCase()}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <Button variant="outline" onClick={handleImageUpload}>
                    <Camera className="w-4 h-4 mr-2" />
                    Upload New Picture
                  </Button>
                  <p className="text-xs text-muted-foreground mt-2">
                    JPG, PNG or GIF. Max size 5MB.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Account Information */}
          <Card className="bg-card border-border animate-fade-in" style={{ animationDelay: "100ms" }}>
            <CardHeader>
              <CardTitle>Account Information</CardTitle>
              <CardDescription>Update your account details</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="username">Username</Label>
                <div className="relative">
                  <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    disabled={!isEditingProfile}
                    className="pl-10"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={!isEditingProfile}
                    className="pl-10"
                  />
                </div>
              </div>

              <div className="flex gap-2">
                {isEditingProfile ? (
                  <>
                    <Button variant="cyber" onClick={handleProfileUpdate}>
                      Save Changes
                    </Button>
                    <Button variant="outline" onClick={() => setIsEditingProfile(false)}>
                      Cancel
                    </Button>
                  </>
                ) : (
                  <Button variant="outline" onClick={() => setIsEditingProfile(true)}>
                    Edit Profile
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Password */}
          <Card className="bg-card border-border animate-fade-in" style={{ animationDelay: "200ms" }}>
            <CardHeader>
              <CardTitle>Change Password</CardTitle>
              <CardDescription>Update your password to keep your account secure</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {isEditingPassword ? (
                <>
                  <div className="space-y-2">
                    <Label htmlFor="currentPassword">Current Password</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="currentPassword"
                        type="password"
                        value={currentPassword}
                        onChange={(e) => setCurrentPassword(e.target.value)}
                        className="pl-10"
                        placeholder="••••••••"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="newPassword">New Password</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="newPassword"
                        type="password"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        className="pl-10"
                        placeholder="••••••••"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword">Confirm New Password</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="confirmPassword"
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className="pl-10"
                        placeholder="••••••••"
                      />
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button variant="cyber" onClick={handlePasswordUpdate}>
                      Update Password
                    </Button>
                    <Button variant="outline" onClick={() => setIsEditingPassword(false)}>
                      Cancel
                    </Button>
                  </div>
                </>
              ) : (
                <Button variant="outline" onClick={() => setIsEditingPassword(true)}>
                  Change Password
                </Button>
              )}
            </CardContent>
          </Card>

          {/* Account Stats */}
          <Card className="bg-gradient-cyber border-0 shadow-glow-purple animate-fade-in" style={{ animationDelay: "300ms" }}>
            <CardHeader>
              <CardTitle className="text-foreground">Account Stats</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4 text-foreground">
                <div>
                  <p className="text-sm opacity-80">Member Since</p>
                  <p className="text-lg font-semibold">
                    {new Intl.DateTimeFormat("en-US", {
                      month: "long",
                      year: "numeric",
                    }).format(profile.joinedDate)}
                  </p>
                </div>
                <div>
                  <p className="text-sm opacity-80">Account Status</p>
                  <p className="text-lg font-semibold">Active</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfilePage;
