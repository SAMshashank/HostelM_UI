"use client";

import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import {
  Search,
  ArrowUpDown,
  Filter,
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  ExternalLink,
} from "lucide-react";

interface Student {
  id: string;
  name: string;
  room: string;
  contact: string;
  joiningDate: string;
  status: "Active" | "In-Active" | "Pending";
  isOn: boolean;
  selected: boolean;
}

export function StudentsView() {
  const [students, setStudents] = useState<Student[]>([
    {
      id: "Y12345",
      name: "Harsh Jogi",
      room: "F2/56",
      contact: "+91 12345 67890",
      joiningDate: "23rd Feb, 2024",
      status: "Active",
      isOn: true,
      selected: true,
    },
    {
      id: "Y12345",
      name: "Harsh Jogi",
      room: "F2/56",
      contact: "+91 12345 67890",
      joiningDate: "23rd Feb, 2024",
      status: "In-Active",
      isOn: false,
      selected: true,
    },
    {
      id: "Y12345",
      name: "Harsh Jogi",
      room: "F2/56",
      contact: "+91 12345 67890",
      joiningDate: "23rd Feb, 2024",
      status: "Pending",
      isOn: true,
      selected: true,
    },
    {
      id: "Y12345",
      name: "Harsh Jogi",
      room: "F2/56",
      contact: "+91 12345 67890",
      joiningDate: "23rd Feb, 2024",
      status: "Active",
      isOn: true,
      selected: true,
    },
    {
      id: "Y12345",
      name: "Harsh Jogi",
      room: "F2/56",
      contact: "+91 12345 67890",
      joiningDate: "23rd Feb, 2024",
      status: "Active",
      isOn: true,
      selected: false,
    },
    {
      id: "Y12345",
      name: "Harsh Jogi",
      room: "F2/56",
      contact: "+91 12345 67890",
      joiningDate: "23rd Feb, 2024",
      status: "Active",
      isOn: true,
      selected: false,
    },
    {
      id: "Y12345",
      name: "Harsh Jogi",
      room: "F2/56",
      contact: "+91 12345 67890",
      joiningDate: "23rd Feb, 2024",
      status: "Active",
      isOn: true,
      selected: false,
    },
    {
      id: "Y12345",
      name: "Harsh Jogi",
      room: "F2/56",
      contact: "+91 12345 67890",
      joiningDate: "23rd Feb, 2024",
      status: "Active",
      isOn: true,
      selected: false,
    },
    {
      id: "Y12345",
      name: "Harsh Jogi",
      room: "F2/56",
      contact: "+91 12345 67890",
      joiningDate: "23rd Feb, 2024",
      status: "Active",
      isOn: true,
      selected: false,
    },
  ]);

  const [showExportMenu, setShowExportMenu] = useState(false);
  const selectedCount = students.filter((s) => s.selected).length;

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Active":
        return (
          <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
            Active
          </Badge>
        );
      case "In-Active":
        return (
          <Badge className="bg-red-100 text-red-800 hover:bg-red-100">
            In-Active
          </Badge>
        );
      case "Pending":
        return (
          <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">
            Pending
          </Badge>
        );
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  return (
    <div className="px-4 lg:px-6 py-4">
      <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4 mb-6">
        <select
          className="border border-gray-300 rounded-lg px-4 py-2 bg-white w-full lg:w-auto"
          title="User Type"
        >
          <option>Hostel Students</option>
          <option>Hostel Admins</option>
          <option>Hostel Staff</option>
        </select>

        <div className="flex flex-wrap gap-2 w-full lg:ml-auto lg:w-auto">
          <Button
            size="sm"
            className="bg-[#674D9F] text-white hover:bg-[#5a4289]"
          >
            All
          </Button>
          <Button size="sm" variant="outline">
            Active
          </Button>
          <Button size="sm" variant="outline">
            In-Active
          </Button>
          <Button size="sm" variant="outline">
            Authorize
          </Button>
          <Button
            size="sm"
            variant="outline"
            className="hidden sm:inline-flex bg-transparent"
          >
            Left Out
          </Button>
          <Button
            size="sm"
            variant="outline"
            className="hidden sm:inline-flex bg-transparent"
          >
            New
          </Button>
          <Button size="sm" variant="outline">
            <Search className="w-4 h-4" />
          </Button>
          <Button
            size="sm"
            variant="outline"
            className="hidden md:inline-flex bg-transparent"
          >
            <ArrowUpDown className="w-4 h-4" />
          </Button>
          <Button
            size="sm"
            variant="outline"
            className="hidden md:inline-flex bg-transparent"
          >
            <Filter className="w-4 h-4" />
          </Button>
        </div>
      </div>

      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[800px]">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-3 lg:px-6 py-3 text-left">
                  <Checkbox  />
                </th>
                <th className="px-3 lg:px-6 py-3 text-left text-xs lg:text-sm font-medium text-gray-900">
                  YOCO ID
                </th>
                <th className="px-3 lg:px-6 py-3 text-left text-xs lg:text-sm font-medium text-gray-900">
                  Name
                </th>
                <th className="px-3 lg:px-6 py-3 text-left text-xs lg:text-sm font-medium text-gray-900">
                  Floor & Room
                </th>
                <th className="px-3 lg:px-6 py-3 text-left text-xs lg:text-sm font-medium text-gray-900 hidden sm:table-cell">
                  Contact No.
                </th>
                <th className="px-3 lg:px-6 py-3 text-left text-xs lg:text-sm font-medium text-gray-900 hidden md:table-cell">
                  Joining Date
                </th>
                <th className="px-3 lg:px-6 py-3 text-left text-xs lg:text-sm font-medium text-gray-900">
                  Status
                </th>
                <th className="px-3 lg:px-6 py-3 text-left text-xs lg:text-sm font-medium text-gray-900">
                  Off/On
                </th>
                <th className="px-3 lg:px-6 py-3 text-left text-xs lg:text-sm font-medium text-gray-900"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {students.map((student, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-3 lg:px-6 py-4">
                    <Checkbox
                      checked={student.selected}
                      className="data-[state=checked]:bg-purple-800"
                    />
                  </td>
                  <td className="px-3 lg:px-6 py-4 text-xs lg:text-sm text-gray-900">
                    {student.id}
                  </td>
                  <td className="px-3 lg:px-6 py-4">
                    <div className="flex items-center gap-2 lg:gap-3">
                      <Avatar className="w-6 h-6 lg:w-8 lg:h-8">
                        <AvatarImage src="/assets/BOY.png"  className="bg-purple-800"/>
                        <AvatarFallback className="bg-orange-100 text-orange-600 text-xs">
                          HJ
                        </AvatarFallback>
                      </Avatar>
                      <span className="text-xs lg:text-sm text-gray-900">
                        {student.name}
                      </span>
                    </div>
                  </td>
                  <td className="px-3 lg:px-6 py-4 text-xs lg:text-sm text-gray-900">
                    {student.room}
                  </td>
                  <td className="px-3 lg:px-6 py-4 text-xs lg:text-sm text-gray-900 hidden sm:table-cell">
                    {student.contact}
                  </td>
                  <td className="px-3 lg:px-6 py-4 text-xs lg:text-sm text-gray-900 hidden md:table-cell">
                    {student.joiningDate}
                  </td>
                  <td className="px-3 lg:px-6 py-4">
                    {getStatusBadge(student.status)}
                  </td>
                  <td className="px-3 lg:px-6 py-4">
                    <Switch
                      checked={student.isOn}
                      className={
                        student.isOn
                          ? "data-[state=checked]:bg-[#4EDA57] data-[state=unchecked]:bg-[#FC8D62]"
                          : "data-[state=checked]:bg-[#4EDA57] data-[state=unchecked]:bg-[#FC8D62]"
                      }
                    />
                  </td>
                  <td className="px-3 lg:px-6 py-4">
                    <Button size="sm" variant="ghost">
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between px-4 lg:px-6 py-4 border-t border-gray-200 gap-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <span className="text-sm text-gray-700">
              Action: {selectedCount} Selected
            </span>
            <div className="relative">
              <Button
                size="sm"
                className="bg-[#674D9F] text-white hover:bg-[#5a4289]"
                onClick={() => setShowExportMenu(!showExportMenu)}
              >
                Export
                <svg
                  className="w-4 h-4 ml-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </Button>
              {showExportMenu && (
                <div className="absolute bottom-full left-0 mb-1 bg-white border border-gray-200 rounded-lg shadow-lg py-2 w-32 z-10">
                  <div className="px-4 py-2 hover:bg-gray-50 cursor-pointer text-sm">
                    All Export
                  </div>
                  <div className="px-4 py-2 hover:bg-gray-50 cursor-pointer text-sm">
                    Export (4)
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <span className="text-sm text-gray-700">Rows per page: 10</span>
            <span className="text-sm text-gray-700">01-10 of 120</span>
            <div className="flex items-center gap-1">
              <Button size="sm" variant="ghost">
                <ChevronsLeft className="w-4 h-4" />
              </Button>
              <Button size="sm" variant="ghost">
                <ChevronLeft className="w-4 h-4" />
              </Button>
              <Button size="sm" variant="ghost">
                <ChevronRight className="w-4 h-4" />
              </Button>
              <Button size="sm" variant="ghost">
                <ChevronsRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
