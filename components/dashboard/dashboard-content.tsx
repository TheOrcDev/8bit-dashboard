"use client";

import { SidebarTrigger } from "@/components/ui/sidebar";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/8bit/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/8bit/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/8bit/dropdown-menu";
import { Button } from "@/components/ui/8bit/button";
import { Input } from "@/components/ui/8bit/input";
import {
  ArrowDownIcon,
  ArrowUpIcon,
  DollarSign,
  MoreHorizontal,
  Package,
  Search,
  ShoppingCart,
  Users,
} from "lucide-react";
import { Badge } from "@/components/ui/8bit/badge";
import { ModeToggle } from "../ui/mode-toggle";

// Sample product data
const products = [
  {
    id: "PROD-1",
    name: "Ergonomic Chair",
    category: "Furniture",
    price: 299.99,
    stock: 24,
    status: "In Stock",
  },
  {
    id: "PROD-2",
    name: "Wireless Headphones",
    category: "Electronics",
    price: 149.99,
    stock: 42,
    status: "In Stock",
  },
  {
    id: "PROD-3",
    name: "Smart Watch",
    category: "Electronics",
    price: 199.99,
    stock: 8,
    status: "Low Stock",
  },
  {
    id: "PROD-4",
    name: "Laptop Stand",
    category: "Accessories",
    price: 49.99,
    stock: 0,
    status: "Out of Stock",
  },
  {
    id: "PROD-5",
    name: "Mechanical Keyboard",
    category: "Electronics",
    price: 129.99,
    stock: 16,
    status: "In Stock",
  },
];

export function DashboardContent() {
  return (
    <div className="flex flex-1 flex-col">
      <header className="flex h-14 items-center gap-4 border-b bg-background px-4 lg:h-[60px] lg:px-6">
        <SidebarTrigger />
        <div className="flex w-full justify-between">
          <Input
            type="search"
            className="w-1/3 pl-7"
            placeholder="Search products..."
          />
          <div className="flex items-center gap-2">
            <ModeToggle />
          </div>
        </div>
      </header>
      <main className="flex-1 space-y-4 p-4 md:p-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
          <div className="flex items-center gap-2">
            <Button>Add Product</Button>
          </div>
        </div>

        {/* Statistics Cards */}
        <div className="grid gap-4 lg:grid-cols-2 xl:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Total Revenue
              </CardTitle>
              <DollarSign className="size-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$45,231</div>
              <p className="text-xs text-muted-foreground flex items-center">
                <ArrowUpIcon className="mr-1 size-4 text-emerald-500" />
                <span className="text-emerald-500">+20.1%</span>
              </p>
              <span className="text-xs text-muted-foreground">
                from last month
              </span>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Products</CardTitle>
              <Package className="size-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">+2,350</div>
              <p className="text-xs text-muted-foreground flex items-center">
                <ArrowUpIcon className="mr-1 size-4 text-emerald-500" />
                <span className="text-emerald-500">+12.2%</span>
              </p>
              <span className="text-xs text-muted-foreground">
                from last month
              </span>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Orders</CardTitle>
              <ShoppingCart className="size-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">+12,234</div>
              <p className="text-xs text-muted-foreground flex items-center">
                <ArrowUpIcon className="mr-1 size-4 text-emerald-500" />
                <span className="text-emerald-500">+19%</span>
              </p>
              <span className="text-xs text-muted-foreground">
                from last month
              </span>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Customers</CardTitle>
              <Users className="size-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">+573</div>
              <p className="text-xs text-muted-foreground flex items-center">
                <ArrowDownIcon className="mr-1 size-4 text-red-500" />
                <span className="text-red-500">-2%</span>
              </p>
              <span className="text-xs text-muted-foreground">
                from last month
              </span>
            </CardContent>
          </Card>
        </div>

        {/* Products Table */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Products</h2>
          <Card>
            <div>
              <Table variant={"borderless"}>
                <TableHeader>
                  <TableRow>
                    <TableHead>ID</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead>Price</TableHead>
                    <TableHead>Stock</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {products.map((product) => (
                    <TableRow key={product.id}>
                      <TableCell className="font-medium">
                        {product.id}
                      </TableCell>
                      <TableCell>{product.name}</TableCell>
                      <TableCell>{product.category}</TableCell>
                      <TableCell>${product.price.toFixed(2)}</TableCell>
                      <TableCell>{product.stock}</TableCell>
                      <TableCell>
                        <Badge
                          variant={
                            product.status === "In Stock"
                              ? "default"
                              : product.status === "Low Stock"
                              ? "warning"
                              : "destructive"
                          }
                        >
                          {product.status}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon">
                              <MoreHorizontal className="size-4" />
                              <span className="sr-only">Open menu</span>
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                            <DropdownMenuItem>Edit</DropdownMenuItem>
                            <DropdownMenuItem>Duplicate</DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>Archive</DropdownMenuItem>
                            <DropdownMenuItem className="text-red-600">
                              Delete
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </Card>
        </div>
      </main>
    </div>
  );
}
