import React from "react";
import { FormInput, FormSelect } from "../../../shared/ui";
import type { UserFormData } from "../types/user.types";

interface UserFormProps {
  formData: Partial<UserFormData>;
  onChange: (data: Partial<UserFormData>) => void;
}

export const UserForm: React.FC<UserFormProps> = ({ formData, onChange }) => {
  return (
    <>
      <FormInput
        name="username"
        value={formData.username || ""}
        onChange={(value) => onChange({ ...formData, username: value })}
        label="사용자명"
        placeholder="사용자명을 입력하세요"
        width="full"
      />
      <FormInput
        name="email"
        value={formData.email || ""}
        onChange={(value) => onChange({ ...formData, email: value })}
        label="이메일"
        placeholder="이메일을 입력하세요"
        type="email"
        required
        width="full"
      />
      <div className="grid grid-cols-2 gap-4">
        <FormSelect
          name="role"
          value={formData.role || "user"}
          onChange={(value) => onChange({ ...formData, role: value as UserFormData["role"] })}
          options={[
            { value: "user", label: "사용자" },
            { value: "moderator", label: "운영자" },
            { value: "admin", label: "관리자" },
          ]}
          label="역할"
          size="md"
        />
        <FormSelect
          name="status"
          value={formData.status || "active"}
          onChange={(value) => onChange({ ...formData, status: value as UserFormData["status"] })}
          options={[
            { value: "active", label: "활성" },
            { value: "inactive", label: "비활성" },
            { value: "suspended", label: "정지" },
          ]}
          label="상태"
          size="md"
        />
      </div>
    </>
  );
};
