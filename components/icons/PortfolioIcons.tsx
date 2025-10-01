
import React from 'react';

const IconWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="w-6 h-6">{children}</div>
);

export const EducationIcon: React.FC = () => (
  <IconWrapper>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.627 48.627 0 0 1 12 20.904a48.627 48.627 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.57 50.57 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
    </svg>
  </IconWrapper>
);

export const UsersIcon: React.FC = () => (
  <IconWrapper>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m-7.5-2.962c.57-1.023-.09-2.317-1.162-2.317h-1.623c-1.072 0-1.732 1.294-1.162 2.317s1.223 1.879 1.879 1.879m1.879-1.879h1.623c.656 0 1.223.856 1.879 1.879M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m-7.5-2.962c.57-1.023-.09-2.317-1.162-2.317h-1.623c-1.072 0-1.732 1.294-1.162 2.317s1.223 1.879 1.879 1.879m1.879-1.879h1.623c.656 0 1.223.856 1.879 1.879m-9.342 0a5.985 5.985 0 0 1 2.962-.832m-2.962.832c-1.023.57-1.879 1.223-1.879 1.879s.856 1.223 1.879 1.879m0-3.758a5.985 5.985 0 0 1 2.962-.832m-2.962.832a5.985 5.985 0 0 0-2.962.832m12.682 0a5.985 5.985 0 0 1 2.962-.832M10.5 3.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm12.75 0a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Z" />
    </svg>
  </IconWrapper>
);

export const BriefcaseIcon: React.FC = () => (
  <IconWrapper>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.07a2.25 2.25 0 0 1-2.25 2.25H5.992a2.25 2.25 0 0 1-2.25-2.25v-4.07a2.25 2.25 0 0 1 2.25-2.25c.536 0 1.052.22 1.454.607.4.386.968.607 1.546.607s1.146-.221 1.546-.607c.402-.387.918-.607 1.454-.607s1.052.22 1.454.607c.4.386.968.607 1.546.607s1.146-.221 1.546-.607c.402-.387.918-.607 1.454-.607a2.25 2.25 0 0 1 2.25 2.25Z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 18.75h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V23.25Zm0-4.5h.008v.008h-.008v-.008Zm-3 2.25h.008v.008h-.008v-.008Zm-3 2.25h.008v.008h-.008v-.008Zm-3-2.25h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008v-.008Zm0-4.5h.008v.008h-.008v-.008Zm3-4.5h.008v.008h-.008v-.008Zm3 2.25h.008v.008h-.008V16.5Zm-6-4.5h.008v.008h-.008v-.008Zm-6 4.5h.008v.008H3.75v-.008Zm6 4.5h.008v.008h-.008v-.008Zm-6-2.25h.008v.008H3.75v-.008Zm6 0h.008v.008h-.008v-.008Zm6-4.5h.008v.008h-.008v-.008Zm-6 2.25h.008v.008h-.008V16.5Zm-3-2.25h.008v.008H6.75v-.008Zm6 0h.008v.008h-.008v-.008Z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75h7.5v7.5h-7.5z" />
    </svg>
  </IconWrapper>
);

export const DocumentTextIcon: React.FC = () => (
  <IconWrapper>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
    </svg>
  </IconWrapper>
);

export const SparklesIcon: React.FC = () => (
  <IconWrapper>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456Z" />
    </svg>
  </IconWrapper>
);

export const CameraIcon: React.FC = () => (
    <IconWrapper>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.776 48.776 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z" />
        </svg>
    </IconWrapper>
);

export const VideoCameraIcon: React.FC = () => (
    <IconWrapper>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9A2.25 2.25 0 0 0 13.5 5.25h-9A2.25 2.25 0 0 0 2.25 7.5v9A2.25 2.25 0 0 0 4.5 18.75Z" />
        </svg>
    </IconWrapper>
);

export const NewspaperIcon: React.FC = () => (
    <IconWrapper>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M12 7.5h-1.5m-1.5 3h-1.5m-7.5 3h7.5m-7.5 3h7.5M3 12h18M3 15h18M3 18h18M3 21h18M4.5 3.75h15a2.25 2.25 0 0 1 2.25 2.25v15a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25v-15A2.25 2.25 0 0 1 4.5 3.75Z" />
        </svg>
    </IconWrapper>
);
