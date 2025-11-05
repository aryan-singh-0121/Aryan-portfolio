import { useState, useEffect } from "react";

export function useDownloads() {
  const [certificates, setCertificates] = useState([]);
  const [resumes, setResumes] = useState([]);

  useEffect(() => {
    const fetchCertificates = async () => {
      try {
        const res = await fetch("/api/certificates");
        const data = await res.json();
        setCertificates(data.data || []);
      } catch (error) {
        console.error("Error loading certificates:", error);
      }
    };

    const fetchResumes = async () => {
      try {
        const res = await fetch("/api/resumes");
        const data = await res.json();
        setResumes(data.data || []);
      } catch (error) {
        console.error("Error loading resumes:", error);
      }
    };

    fetchCertificates();
    fetchResumes();
  }, []);

  return { certificates, resumes };
}
