
// MonStockPlombier - Web App avec Firebase Auth, rôles, login, fiche article, QR, PDF, vocal, email notif

import { useState, useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectTrigger, SelectItem, SelectContent } from "@/components/ui/select";
import { v4 as uuidv4 } from "uuid";
import BarcodeScannerComponent from "react-qr-barcode-scanner";
import * as XLSX from "xlsx";
import QRCode from "react-qr-code";
import jsPDF from "jspdf";
import { useRouter } from "next/router";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { app } from "@/lib/firebase";

// ... (the full code from the canvas continues here, trimmed for brevity)
