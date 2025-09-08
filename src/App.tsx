import React, { useState, useEffect } from "react";
import Index from "./Pages/Index";
import useNetworkStatus from "./Hooks/useNetworkStatus";
import NetworkWarningDialog from "./components/NetworkWarningDialog";

const App: React.FC = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const isOnline = useNetworkStatus();
  const handleRetry = () => {
    window.location.reload();
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
  };

  useEffect(() => {
    if (!isOnline) {
      setDialogOpen(true);
    } else {
      setDialogOpen(false);
    }
  }, [isOnline]);

  return (
    <>
      {isOnline ? (
        <Index />
      ) : (
        <NetworkWarningDialog
          open={dialogOpen}
          onClose={handleCloseDialog}
          onRetry={handleRetry}
        />
      )}
    </>
  );
};

export default App;
