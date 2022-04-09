import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  BeforeInsert,
} from "typeorm";
import { IsEmail } from "class-validator";
import { USER_ROLE } from "../constants/userRoles";
import * as bcrypt from "bcryptjs";

@Entity()
export class User {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column({ nullable: false })
  name!: string;

  @Column({ nullable: false, unique: true })
  @IsEmail()
  email!: string;

  @Column({ nullable: false })
  password!: string;

  @Column({ default: "no-image" })
  image: string;

  @Column({ type: "enum", enum: USER_ROLE, default: USER_ROLE.USER })
  role!: typeof USER_ROLE;

  @Column({ default: "no-address" })
  address: string;

  @Column({ type: "boolean", default: true })
  active: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @BeforeInsert()
  async beforeInsert() {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
  }

  async matchPassword(enteredPassword: string) {
    try {
      return await bcrypt.compare(enteredPassword, this.password);
    } catch (error) {
      console.error(error);
    }
  }

  hashPassword() {
    this.password = bcrypt.hashSync(this.password, 8);
  }
}
